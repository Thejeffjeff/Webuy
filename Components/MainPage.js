import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import Products from './EkstraCopmponents/Products';


export default class MainPage extends Component {
    //Funktionen skal navigere til komponenten "DetailScreen"
    GoToDetails = () =>{
        this.props.navigation.navigate('Details');
    }
    //Her rendere den MainPage
    render() {

    return  (
        <View style={styles.container}>
        {/* Opsætning af Logo */}
        <View style={styles.ViewStyle}>
        <Image style={styles.imageLayout}
            source={require('../assets/WeBuy.png')}/>
        </View>
        <View>
             <Text style={styles.title}>
            Anbefaling
            </Text>
        </View>
        {/* ScrollView, gør det muligt at kunne rolle op og ned gennem interfacet */}
        <ScrollView>
        <View style={{ marginTop: 40 }}>
                           
                            {/*Laver et view, hvor det muligt at trykke på komponenten "Products",
                             hvor komponenten "products" tager imod props: navn, pris, rabt og antal reservationer.*/}
                            <View style={styles.ScrollStyle}>
                                <TouchableOpacity onPress={this.GoToDetails}>
                                <Products
                                imageUri={require('../assets/sweater.jpeg')}
                                    name="Produkt X"
                                    price="300"
                                    price2="80"  
                                    antal="1954/2500"  />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.GoToDetails}>
                                <Products
                                imageUri={require('../assets/ball.jpg')}
                                    name="Produkt X"
                                    price="100"
                                    price2="20"
                                    antal="249/750"    /> 
                                </TouchableOpacity>
                                <Products 
                                imageUri={require('../assets/headphones.png')}
                                    name="Produkt X"
                                    price="1200"
                                    price2="600"  
                                    antal="6345/10000"  /> 
                                <Products 
                                imageUri={require('../assets/EGG.jpg')}
                                    name="Produkt X"
                                    price="8000"
                                    price2="2300"  
                                    antal="245/350"  /> 
                                <Products 
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt X"
                                    price="1000"
                                    price2="400"
                                    antal="323/1500"    /> 
                                <Products 
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt X"
                                    price="1000"
                                    price2="800"
                                    antal="314/550"    /> 
                                <Products 
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt X"
                                    price="350"
                                    price2="80"  
                                    antal="1523/2500"  /> 
                                <Products
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt X"
                                    price="1000"
                                    price2="420"  
                                    antal="467/530"  /> 

                            </View>
                        </View>
        </ScrollView>
        </View>
    )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ViewStyle: {
        backgroundColor:'white',
        borderBottomWidth: 1, borderBottomColor: 'grey',
        height: 80
    },
        imageLayout: {
            alignSelf: 'center',
            height: 100
    },
    ScrollStyle:{
        paddingHorizontal: 20, 
        marginTop: 0.1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        paddingHorizontal: 20,
        padding: 10
    }
  });