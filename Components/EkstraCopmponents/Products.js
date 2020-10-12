import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
export default class Products extends Component {
    //Her renderes products komponenten, hvor den skal retunerer et view, hvor der indeholder to andre view, som fremviser billede og tekst
    render() {
        return (
            <View style={styles.Viewstyle}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        source={(this.props.imageUri)} />
                </View>
                {/* her opsætter vi teksten og angiver forskellige som så vil blive kaldt på mainPage, hvor vi derefter navngiver dem*/}
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 10, textDecorationLine: "line-through"  }}>{this.props.price}-Kr</Text>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>{this.props.price2},-Kr</Text>
                    <Text style={{ fontSize: 10, color: '#b63838', textAlign:'right', fontWeight:'bold'  }}>{this.props.antal} Reservationer</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageLayout: {
        flex: 1,
        width: null,
        height: null,
        resizeMode:'cover'
    },
    Viewstyle:{
        width: 160, 
        height: 160,
        borderWidth: 0.5,
         borderColor: '#dddd',
          marginBottom:15,
          shadowOpacity:0.3
         
    }
});