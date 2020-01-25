import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home';
import Personal from '../screens/Home';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          <Icon name="home-outline" size={28} color={tintColor} />;
        },
      },
    },
    Explore: {
      screen: Personal,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          <Icon name="account-circle-outline" size={28} color={tintColor} />;
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#21ad6c',
      inactiveTintColor: '#a6a6a6',
      labelStyle: {
        marginTop: -8,
        marginBottom: 10,
      },
      style: {
        height: 60,
      },
    },
  },
);

const StackNavigator = createStackNavigator(
  {
    TabNavigator: {screen: TabNavigator},
    Personal: {screen: Personal},
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabNavigator',
    cardShadowEnabled: true,
  },
);

export default createAppContainer(StackNavigator);
