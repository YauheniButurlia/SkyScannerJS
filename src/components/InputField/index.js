import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

import {styles} from './styles';

export default class InputField extends React.Component {
    render() {
        return(
            <View style={styles.field}>
                <Text>
                    {this.props.field}
                </Text>
                <TextInput 
                    style={styles.textInputStyle}
                    placeholder={"Enter new " + this.props.field}
                    onChangeText={this.props.onChangeText}
                    />
            </View>
);
    }
}