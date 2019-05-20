import React from "react";
import {Text, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

import {styles} from './styles';

export default class FloatingActionButton extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        );
    }
}