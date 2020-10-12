import React, { Component } from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';


export default class Categories extends Component {
    render() {
    return  (
            <View style={styles.slide}>
                <View style={{flex: 2}}>
                    <Image source={(this.props.imageUri)} 
                    style={styles.imageLayout}
                    />
                </View>
                <View style={styles.container}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
    )
    }
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
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