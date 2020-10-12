import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export default class Profile extends Component {

    render() {
    return  (
        <View>
    {/*Vi kalder på ImageBackground, som tager et billeds-webadresse som kilde(source) og sætter det som baggrundsbillede, 
    hvor inde i denne komponent opstilles en profil */}
    <ImageBackground
        source={{uri:'https://images.unsplash.com/photo-1544369757-b073bb046bd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'}}
        style={styles.container}>
            <View style={styles.overlay}>
            <Text style = {[styles.textStyle, {paddingTop: 10}]} >My Account</Text>
            <Image source= {{uri:'https://i.stack.imgur.com/l60Hf.png'}}
                style={styles.avatarStyle}/>
            <Text style = {styles.textStyle} > Guest</Text>
        </View>
    </ImageBackground>

            {/* Opsætning af buttons, men ingen funktioner endnu*/}
    <TouchableOpacity style={styles.buttonStyle} onPress>
        <Text style={styles.text}>Login</Text>
    </TouchableOpacity >
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text}>Resevation</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text}>Ordre</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text}>Information</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.text}>Om os</Text>
    </TouchableOpacity>
    </View>
    )
}
}

//Dette er styling
const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey"
  },            
  overlay: {
      opacity: 100,
  },
      avatarStyle: {
          width:100, 
          height: 100,
          marginTop: 10,
          borderRadius: 50,
          alignSelf: 'center',
      },
      textStyle: {
          marginTop: 10,
          fontSize: 18,
          color: "#FFFFFF",
          fontWeight: 'bold',
          alignSelf: 'center',
      },
      balanceContainer:{
          padding:10,
      },
      buttonStyle: {
        margin: 1,
        padding: 20,
        borderRadius: 10,
        borderBottomColor: "blue",
        borderBottomWidth: StyleSheet.hairlineWidth     
     },
     text: {
        fontWeight: "bold",
     }
    });
  