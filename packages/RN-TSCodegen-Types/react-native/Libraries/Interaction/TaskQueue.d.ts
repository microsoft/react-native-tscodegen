// @flow
declare type SimpleTask = {
  name: string;
  run: () => void;
};
declare type PromiseTask = {
  name: string;
  gen: () => Promise<void>;
};
declare type Task = SimpleTask | PromiseTask | (() => void);
declare class TaskQueue {
  /**
   * TaskQueue instances are self contained and independent, so multiple tasks
   * of varying semantics and priority can operate together.
   *
   * `onMoreTasks` is invoked when `PromiseTask`s resolve if there are more
   * tasks to process.
   */
  constructor($f2t1: {
    onMoreTasks: () => void;
  });

  /**
   * Add a task to the queue.  It is recommended to name your tasks for easier
   * async debugging. Tasks will not be executed until `processNext` is called
   * explicitly.
   */
  enqueue(task: Task): void;
  enqueueTasks(tasks: Task[]): void;
  cancelTasks(tasksToCancel: Task[]): void;

  /**
   * Check to see if `processNext` should be called.
   *
   * @returns {boolean} Returns true if there are tasks that are ready to be
   * processed with `processNext`, or returns false if there are no more tasks
   * to be processed right now, although there may be tasks in the queue that
   * are blocked by earlier `PromiseTask`s that haven't resolved yet.
   * `onMoreTasks` will be called after each `PromiseTask` resolves if there are
   * tasks ready to run at that point.
   */
  hasTasksToProcess(): boolean;

  /**
   * Executes the next task in the queue.
   */
  processNext(): void;
}
export type { Task };
export default TaskQueue;