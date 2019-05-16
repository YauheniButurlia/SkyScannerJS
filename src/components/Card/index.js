import React from "react";
import {Text, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';

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