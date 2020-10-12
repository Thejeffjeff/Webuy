import 'react-native-gesture-handler';
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
  } from 'react-native';

export default class DetailScreen extends Component {
     
                //Laver en GoToHome funktion som gør at props (properties) skal gå tilbage
                 GoToHome = ()=>{
                // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
                this.props.navigation.goBack();
                }
                // Skal lave en alert og udprinte følgende tekst
                Bestil() {
                  Alert.alert("Reserveret", "OBS når antallet er opnået, vil dette produkt blive sendt")
                }
                //Her opsættes detajlerne af produktet, hvor informtioner vil blive renderet, samt størelser og knapper
                render() {
                  return (
                    <View style={styles.container}>
                      <ScrollView>
                        <View style={{alignItems:'center', marginHorizontal:30}}>
                          <Image style={styles.productImg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca"}}/>
                          <Text style={styles.name}>Trøje</Text>
                          <Text style={styles.price}>300KR</Text>
                          <Text style={styles.price2}>80KR</Text>
                          <Text>Producent: Producent navn </Text>
                          <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                            natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec quam felis, ultricies nec
                          </Text>
                        </View>
                        <View style={styles.contentSize}>
                          <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity> 
                          <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity> 
                          <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity> 
                          <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity> 
                        </View>
                        <View> 
                            <Text style={styles.countDown}>Count down: 10 dage</Text>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.addToCarContainer}>
                          <TouchableOpacity style={styles.shareButton} onPress={()=> this.Bestil()}>
                            <Text style={styles.shareButtonText}>Reservere</Text>  
                          </TouchableOpacity>
                          <Text style={styles.description, {textDecorationLine:'underline', textAlign:'center'}}>Del med dine venner og familie!</Text>
                        </View> 
                      </ScrollView>
                    </View>
                  );
                }
              }
              
              const styles = StyleSheet.create({
                container:{
                  flex:1,
                  marginTop:20,
                },
                productImg:{
                  width:200,
                  height:200,
                },
                name:{
                  fontSize:28,
                  color:"#696969",
                  fontWeight:'bold'
                },
                price:{
                    marginTop:10,
                    fontSize:18,
                    color:"red",
                    fontWeight:'bold',
                    textDecorationLine: "line-through"
                  },
                price2:{
                  marginTop:10,
                  fontSize:18,
                  color:"green",
                  fontWeight:'bold'
                },
                description:{
                  textAlign:'center',
                  marginTop:10,
                  color:"#696969",
                },
                star:{
                  width:40,
                  height:40,
                },
                btnColor: {
                  height:30,
                  width:30,
                  borderRadius:30,
                  marginHorizontal:3
                },
                btnSize: {
                  height:40,
                  width:40,
                  borderRadius:40,
                  borderColor:'#778899',
                  borderWidth:1,
                  marginHorizontal:3,
                  backgroundColor:'white',
              
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                starContainer:{
                  justifyContent:'center', 
                  marginHorizontal:30, 
                  flexDirection:'row', 
                  marginTop:20
                },
                contentColors:{ 
                  justifyContent:'center', 
                  marginHorizontal:30, 
                  flexDirection:'row', 
                  marginTop:20
                },
                contentSize:{ 
                  justifyContent:'center', 
                  marginHorizontal:30, 
                  flexDirection:'row', 
                  marginTop:20
                },
                separator:{
                  height:2,
                  backgroundColor:"#eeeeee",
                  marginTop:20,
                  marginHorizontal:30
                },
                shareButton: {
                  marginTop:10,
                  height:45,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:30,
                  backgroundColor: "#FF0000",
                },
                shareButtonText:{
                  color: "#FFFFFF",
                  fontSize:20,
                },
                addToCarContainer:{
                  marginHorizontal:30
                },
                countDown:{
                    fontWeight:'bold',
                    fontSize: 24,
                    justifyContent:'center',
                    textAlign:'center'
                }
              });    
                          