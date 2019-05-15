import React from "react";
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default class FloatingActionButton extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  fabIcon: {
    fontSize: 40, 
    color: 'white' 
  },
  fab: {
    position: 'absolute', 
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: '#3CB371', 
    borderRadius: 30, 
    elevation: 8 
  }
});