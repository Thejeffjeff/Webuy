import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, Platform, StatusBar, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from './EkstraCopmponents/Categories';


export default class Explore extends Component {

    //Vi instanitere at header højden er 80, hvis det er en android skal de ændre højden til 100
    //Yderligere skal den tage mobilens nuværende højde fra statusBaren
    componentDidMount() {
        this.startHeaderHeight = 80
        if(Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render() {
    return  (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.ViewStyle, {height: this.startHeaderHeight}} >
                {/*Her opsættes en TextInput som skal være appens søgemaskine*/}
                    <View style={styles.searchBar}>
                        <Icon name="ios-search" size={20} style={{marginRight: 10}}/>
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor="grey"
                            style={styles.inputText}
                        />
                    </View>
                </View>

                {/* Her opsættes der to scrollview en som er vertikal og horisontal
                Meningen med dette er at kategorier skal man kunne rolle til højre og venstre,
                mens den vertikale skal kunne fremvises resultater fra søgemaskinen*/}
                <ScrollView>
                    <View style= {styles.ViewStyle2}>
                        <Text style={styles.title}>
                            Kategorier
                        </Text>

                        <View style={{height: 130, marginTop: 20}}>
                            {/* Opsætning af buttons, men ingen funktioner endnu*/}
                            <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                                {/* Categories komponenten kaldes så det er muligt at fremvise de forskellige kategorier,
                                derudover tager denne komponent to props: navn og et billede source som vi henter fra vores assets*/}
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
        </View>
    )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:15
    },
    ViewStyle: {
        backgroundColor:'white',
        borderBottomWidth: 1, borderBottomColor: 'black'
    },
    ViewStyle2: {
        backgroundColor: "grey",
        flex: 1,
        backgroundColor: "white",
        paddingTop: 10,
    },
    searchBar: {
    backgroundColor: "white",
    flexDirection: 'row', 
    padding: 10,  
    marginHorizontal: 10,
    shadowOffset: {widht: 1, height: 1},
    shadowColor: "black",
    shadowOpacity: 0.4,
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
  