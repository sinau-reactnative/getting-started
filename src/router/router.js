import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home';
import Personal from '../screens/Personal';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name="apple-safari" size={30} color={tintColor} />;
        },
      },
    },
    Hiking: {
      screen: Personal,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name="hiking" size={30} color={tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#3faba4',
      inactiveTintColor: '#a6a6a6',
      labelStyle: {
        marginTop: -5,
        marginBottom: 10,
      },
      style: {
        height: 60,
      },
      allowFontScaling: true,
    },
  },
);

export default createAppContainer(TabNavigator);
