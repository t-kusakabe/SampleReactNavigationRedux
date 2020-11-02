import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';

import store from './store';
import Page1Screen from './screens/Page1Screen';
import Page1DetailScreen from './screens/Page1DetailScreen';
import Page2Screen from './screens/Page2Screen';

const MainStack = createStackNavigator(
  {
    Page1: Page1Screen,
    Page1Detail: Page1DetailScreen
  }
);

const MainStack2 = createStackNavigator(
  {
    Page2: Page2Screen
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Page1: MainStack,
    Page2: MainStack2
  },
  {
    initialRouteName: 'Page1'
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
