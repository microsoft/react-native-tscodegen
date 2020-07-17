// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { parseCommands } from './ComponentCommandParser';
import { tryParseEvent } from './ComponentEventParser';
import { parseProperty } from './ComponentPropertyParser';
import { ExportCommandInfo, ExportComponentInfo, getMembersFromType } from './ExportParser';

function importExists(sourceFile: ts.SourceFile, name: string): boolean {
    const result = sourceFile.forEachChild((importNode: ts.Node) => {
        if (ts.isImportDeclaration(importNode)) {
            if (importNode.importClause !== undefined) {
                if (importNode.importClause.name !== undefined) {
                    if (importNode.importClause.name.getText() === name) {
                        return true;
                    }
                }
                if (importNode.importClause.namedBindings !== undefined && ts.isNamedImports(importNode.importClause.namedBindings)) {
                    for (const specifier of importNode.importClause.namedBindings.elements) {
                        if (specifier.name.getText() === name) {
                            return true;
                        }
                    }
                }
            }
            return undefined;
        }
    });
    return result === undefined ? false : result;
}

// node_modules\@types\react-native\index.d.ts
const ignoredProperties = [
    // ViewProps
    'hitSlop', 'onLayout', 'pointerEvents', 'removeClippedSubviews', 'style', 'testID', 'nativeID',
    // ViewPropsAndroid
    'collapsable', 'needsOffscreenAlphaCompositing', 'renderToHardwareTextureAndroid',
    // ViewPropsIOS
    'shouldRasterizeIOS',
    // TVViewPropsIOS
    'isTVSelectable', 'hasTVPreferredFocus', 'tvParallaxProperties', 'tvParallaxShiftDistanceX', 'tvParallaxShiftDistanceY', 'tvParallaxTiltAngle', 'tvParallaxMagnification',
    // GestureResponderHandlers
    'onStartShouldSetResponder', 'onMoveShouldSetResponder', 'onResponderEnd', 'onResponderGrant', 'onResponderReject', 'onResponderMove', 'onResponderRelease', 'onResponderStart', 'onResponderTerminationRequest', 'onResponderTerminate', 'onStartShouldSetResponderCapture', 'onMoveShouldSetResponderCapture',
    // Touchable
    'onTouchStart', 'onTouchStart', 'onTouchEnd', 'onTouchCancel', 'onTouchEndCapture',
    // AccessibilityProps
    'accessible', 'accessibilityActions', 'accessibilityLabel', 'accessibilityRole', 'accessibilityStates', 'accessibilityState', 'accessibilityHint', 'onAccessibilityAction',
    // AccessibilityPropsAndroid
    'accessibilityComponentType', 'accessibilityLiveRegion', 'importantForAccessibility',
    // AccessibilityPropsIOS
    'accessibilityElementsHidden', 'accessibilityTraits', 'accessibilityViewIsModal', 'onAccessibilityTap', 'onMagicTap', 'accessibilityIgnoresInvertColors'
];

export function processComponent(info: ExportComponentInfo, commandsInfo: ExportCommandInfo | undefined): cs.ComponentShape {
    const events: cs.EventTypeShape[] = [];
    const props: cs.PropTypeShape[] = [];
    let commands: cs.CommandTypeShape[] = [];

    if (commandsInfo !== undefined) {
        commands = parseCommands(commandsInfo);
    }

    const validMembers = getMembersFromType(info.typeNode, info.sourceFile);
    if (validMembers === undefined) {
        throw new Error(`Type ${info.typeNode.getText()} to define a component should be a interface type defined in the same source file.`);
    }

    const typeChecker = info.program.getTypeChecker();
    const mappedType = typeChecker.getTypeFromTypeNode(info.typeNode);

    mappedType.getProperties().forEach((propSymbol: ts.Symbol) => {
        if (ignoredProperties.includes(propSymbol.name)) {
            return;
        }

        if (propSymbol.declarations.length !== 1) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is expected to be a property.`);
        }
        const propDecl = propSymbol.declarations[0];
        if (!ts.isPropertySignature(propDecl)) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is expected to be a property.`);
        }
        if (propDecl.type === undefined) {
            throw new Error(`Member ${propSymbol.name} in type ${info.typeNode.getText()} is expected to be a property.`);
        }

        try {
            const eventShape = tryParseEvent(info, propDecl);
            if (eventShape !== undefined) {
                events.push(eventShape);
            } else {
                props.push(parseProperty(info, propDecl));
            }
        } catch (err) {
            if (err instanceof Error) {
                err.message = `${propSymbol.name}: ${err.message}`;
            } else {
                throw err;
            }
        }
    });

    const result = {
        extendsProps: <cs.ExtendsPropsShape[]>[],
        events,
        props,
        commands
    };

    if (importExists(info.sourceFile, 'ViewProps')) {
        result.extendsProps.push({ knownTypeName: 'ReactNativeCoreViewProps', type: 'ReactNativeBuiltInType' });
    }
    Object.getOwnPropertyNames(info.options).forEach((key: string) => {
        result[key] = info.options[key];
    });

    return <cs.ComponentShape>result;
}
