#pragma once

#include "MainPage.g.h"



namespace winrt::Playground::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();

    private:
      void LoadReact();
    };
}

namespace winrt::Playground::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {
    };
}


