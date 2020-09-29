import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { DrawerItems } from 'react-navigation-drawer';

import db from '../config'
import firebase from 'firebase'

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
       <View>
          <View> 
          <DrawerItems {...this.props}/>
           </View>
           <TouchableOpacity style={{
            marginTop:400,
            marginLeft:30
           }} 
           onPress={()=>{
               this.props.navigation.navigate('LoginScreen')
               firebase.auth().signOut();
           }}>
           <Text>Log Out</Text>

           </TouchableOpacity>
          </View>
        )
    }
}