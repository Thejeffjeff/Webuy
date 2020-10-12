import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,
TextInput} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainPage from './Components/MainPage'
import Profile from './Components/Profile'
import Explore from './Components/Explore'
import {Entypo} from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from 'firebase';


const TabNavigator = createBottomTabNavigator({
  //Tilføjer router til de forskellige komponenter
  Home:{
    screen: MainPage,
    navigationOptions: {
      tabBarLabel: "Hjem",
      tabBarIcon:({tintColor}) => (
        <Entypo name="home" size ={24} color={tintColor} />
      )
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "Udforsk",
      tabBarIcon:({tintColor}) => (
      <FontAwesome5 name="search" size={24} color={tintColor} />  
        )  
      }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Instillinger",
      tabBarIcon:({tintColor}) => (
        <Feather name="settings" size={24} color={tintColor} />)
    },
  },
},
  {
    //Giver styling til tabbar mulighederne
    tabBarOptions: {
      showIcon: true, 
      labelStyle: {
        fontSize: 15,
      },
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      style:{
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset:{width:5, height:3},
        shadowColor: 'black',
        elevation: 5
      }
    }
  }
)

const AppContainer = createAppContainer(TabNavigator)

export default class App extends Component {
  //Vi instanitere user som skal være null
  state = {
    user:null
  };
  componentDidMount = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyCKFsCWAY0CJLxkSnAoJlj-x1Z9e1MupMI",
      authDomain: "webuy-a8a66.firebaseapp.com",
      databaseURL: "https://webuy-a8a66.firebaseio.com",
      projectId: "webuy-a8a66",
      storageBucket: "webuy-a8a66.appspot.com",
      messagingSenderId: "376323299248",
      appId: "1:376323299248:web:a424087eabe58fc4bce875"
    };
      //Tjekker om firebase er igangværende, hvis ikke skal den initialisere firebase
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      }
      //Holder øje om der kommer en ændring på user og derefter ændre på user
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
      });
  }

  render(){
      return(
          <AppContainer/>
      )
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
}
  });