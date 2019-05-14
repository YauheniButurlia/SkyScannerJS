import React from "react";
import {Text,StyleSheet, View} from 'react-native';

export default class Card extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.item}>{this.props.item.key}</Text>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#ff4990', 
        flex: 1 ,
        borderRadius: 20,
        borderWidth: 2,
        margin: 20
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });