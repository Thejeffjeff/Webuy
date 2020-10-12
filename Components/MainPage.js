import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Products from './EkstraCopmponents/Products';


export default class MainPage extends Component {

    render() {
    return  (
        <View style={styles.container}> 
        <View style={styles.ViewStyle}>
        <Image style={styles.imageLayout}
            source={require('../assets/WeBuy.png')}/>
        </View>
        <View>

        </View>
        <ScrollView>
        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20 }}>
                                Anbefaling
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Products width={375}
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Tøj"/>
                                <Products width={375}
                                 imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt nav"
                                />
                                      <Products width={375}
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt navn"
                                />
                                <Products width={375}
                                 imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt nav"
                                />
                                      <Products width={375}
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt navn"
                                />
                                <Products width={375}
                                 imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt nav"
                                />
                                      <Products width={375}
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt navn"
                                />
                                <Products width={375}
                                 imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt nav"
                                />
                                      <Products width={375}
                                imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt navn"
                                />
                                <Products width={375}
                                 imageUri={require('../assets/clothing.jpg')}
                                    name="Produkt nav"
                                />
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
  });