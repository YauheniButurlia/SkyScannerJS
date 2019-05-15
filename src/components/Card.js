import React from "react";
import {Text,StyleSheet, View, Alert, TouchableOpacity} from 'react-native';

export default class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <View>
                            <Text style={styles.item}>
                                {this.props.data.key}
                            </Text>
                            <Text style={styles.item}>
                                {this.props.data.num}
                            </Text>
                        </View>
                    </TouchableOpacity>
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