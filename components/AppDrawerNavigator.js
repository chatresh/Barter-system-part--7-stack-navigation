import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';

import customSideBarMenu from './customSideBarMenu'
import { BottomNavigator } from './BottomNavigator';
import  settings  from '../screens/settings';

import LoginScreen from '../screens/LoginScreen'
import MyBarters from '../screens/MyBarters'

export const AppDrawerNavigator = createDrawerNavigator(
 {
   Home:{screen:BottomNavigator},
   Settings:{screen:settings},
   MyBarters:{screen:MyBarters}
 },
 {
        contentComponent: customSideBarMenu
    },
    {
        initialRouteName : "Home"
    }
 )