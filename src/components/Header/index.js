import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';

const menuButton = require('../../../assets/menu2.png');
const closeButton = require('../../../assets/exit2.png');
const iconSource = require('../../../assets/iconMain.png');
let imageSource = menuButton;

export default class Header extends React.Component {

    _setImage() {
        if(imageSource === menuButton) {
            imageSource = closeButton;
        } else {
            imageSource = menuButton;
        }
        this.forceUpdate();
    }
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={iconSource}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.props.appName}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={() => {
                            this.props.toggleSettings();
                            this._setImage()
                            }
                        } 
                        style={styles.settingsButton}>
                        <Image source={imageSource}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}