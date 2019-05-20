import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

export default class About extends React.Component {

    static navigationOptions = {
        title: 'About Page',      
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Super Awesome App. Don't ask why. It's obvious.</Text>
            </View>
        );
    }
}