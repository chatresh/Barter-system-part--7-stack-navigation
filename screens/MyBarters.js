import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";
import db from "../config";
import firebase from "firebase";
import { ListItem, Header } from 'react-native-elements'

export default class MyBarters extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            allBarters:[]
        }
    }

    getAllBarters= async()=>{
      await  db.collection("My_Barters").where("userId","==",this.state.userId).get()
      .then(
          snapshot=>{
              snapshot.forEach(doc => {
                  this.setState({allBarters:[...this.state.allBarters,doc.data()]})
              });
          }
      )
    }

    componentDidMount(){
        this.getAllBarters();
    }


    keyExtractor = (item,index) => index.toString();

    renderItem = ({item,i}) => {
       return (
           <ListItem
           key = {i}
           title={item.name}
           subtitle={item.exchanger}
           rightElement={
            <TouchableOpacity style={styles.button}>
                    <Text>Exchange</Text>
                </TouchableOpacity>
           }
           />
       )
    }


    render(){
        return(
            <View>
              <Header
                    centerComponent={{text:"My Barters", style:{fontSize:30}}}
                />
               {
                   this.state.allBarters.length===0?
                   (
                       <Text>List Of All Barters</Text>
                   ):
                   (
                      <FlatList
                    data={this.state.allBarters}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
                   )
               }
             </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
        }
    },
})