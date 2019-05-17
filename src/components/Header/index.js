import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';
import { request_carriers } from '../../actions/carriers';

export default class Header extends React.Component {
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>

                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.props.appName}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.toggleSettings()} style={styles.settingsButton}>
                        <Image source={require('../../../assets/menu2.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}