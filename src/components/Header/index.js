import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';
import { request_carriers } from '../../actions/carriers';

const menuButton = require('../../../assets/menu2.png');
const closeButton = require('../../../assets/exit2.png');
let imageSource = menuButton;

export default class Header extends React.Component {

    _setImage() {
        if(imageSource === menuButton) {
            imageSource = closeButton;
            this.forceUpdate();
        } else {
            imageSource = menuButton;
            this.forceUpdate();
        }
    }
 
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
                    <TouchableOpacity onPress={() => {this.props.toggleSettings();this._setImage()}} style={styles.settingsButton}>
                        <Image source={imageSource}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}