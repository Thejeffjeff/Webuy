import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, Platform, StatusBar, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from './EkstraCopmponents/Categories';


export default class Explore extends Component {

    //Vi instanitere at header højden er 80, hvis det er en android skal de ændre højden til 100
    //Yderligere skal den tage mobilens nuværende højde på statusBaren
    componentDidMount() {
        this.startHeaderHeight = 80
        if(Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render() {
    return  (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.ViewStyle, {height: this.startHeaderHeight}} >
                    <View style={styles.searchBar}>
                        <Icon name="ios-search" size={20} style={{marginRight: 10}}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Search"
                            placeholderTextColor="grey"
                            style={styles.inputText}
                        />
                    </View>
                </View>
                <ScrollView scrollEventThrottle = {16}>
                    <View style= {styles.ViewStyle2}>
                        <Text style={styles.title}>
                            Kategorier
                        </Text>

                        <View style={{height: 130, marginTop: 20}}>
                            <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                                <Categories imageUri={require('../assets/home.jpg')}
                                name="Møbler"
                                />  
                                <Categories imageUri={require('../assets/clothing.jpg')}
                                name="Tøj"
                                />
                                <Categories imageUri={require('../assets/Electronics.png')}
                                name="Elektronik"
                                />
                                <Categories imageUri={require('../assets/HB.jpg')}
                                name="Kosmetik & Sundhed"
                                />
                                 <Categories imageUri={require('../assets/fifa.jpg')}
                                name="Spill"
                                />
                                 <Categories imageUri={require('../assets/tickets.jpeg')}
                                name="Gavekort"
                                />
                            </ScrollView>
                        </View>
                        <View>
                            <Text style={styles.title}>
                            Resultat
                            </Text>
                            <Text style={{ fontWeight: 'bold', padding: 10 }}>
                                    Her fornede skal produkter man søger op fremvises                                    
                                </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ViewStyle: {
        backgroundColor:'white',
        borderBottomWidth: 1, borderBottomColor: 'black'
    },
    ViewStyle2: {
        backgroundColor: "grey",
        flex: 1,
        backgroundColor: "white",
        paddingTop: 20,
    },
    searchBar: {
    backgroundColor: "white",
    flexDirection: 'row', 
    padding: 10,  
    marginHorizontal: 10,
    shadowOffset: {widht: 1, height: 1},
    shadowColor: "red",
    shadowOpacity: 0.3,
    elevation: 1,
    marginTop: Platform.OS == 'andorid' ? 30: null,
    },
    inputText:{ flex:1, 
    fontWeight:"bold", 
    backgroundColor:"white"
},
    title: {
    fontWeight: '700',
    fontSize: 26,
    paddingHorizontal: 15,
 },
    imageLayout: {
        flex: 1,
        width: null,
        height: null,
        resizeMode:'cover'
    },
    slide: {
        height: 130,
        width: 130,
        marginLeft:20, 
        borderWidth: 0.5,
        borderColor: "#dddddd"
    }
  });
  