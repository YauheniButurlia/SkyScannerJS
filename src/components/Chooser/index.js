import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';

import {styles} from './styles';

export default class Chooser extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            quantity : this.props.initialValue
        }
    }

    validateInput(text) {
        if(text === ''){
            return 2;
        }
        return parseInt(text);
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.upSubContainer}>

                    <View style={styles.halfUp}>
                        <View style={styles.wideTextField}>
                            <Text style={styles.textStyle}>
                                {this.props.name}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.halfUp}>
                        <View style={styles.wideTextFieldPlusBorder}>
                            <TextInput
                                keyboardType={'numeric'}
                                onSubmitEditing={(e) => this.setState({quantity: this.validateInput(e.nativeEvent.text)})}
                                placeholder={String(this.state.quantity)}
                                style={styles.textStyle}/>
                        </View>
                        <View style={styles.thinTextField}>
                            <Text style={styles.textStyle}>
                                {this.props.unit}
                            </Text>
                        </View>
                    </View>
                </View>
                
                <Slider
                    style={styles.sliderStyle}
                    minimumValue={this.props.minValue}
                    maximumValue={this.props.maxValue}
                    step={this.props.step}
                    value={this.state.quantity}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    onValueChange={(value) => this.setState({quantity: value})}
                />
            </View>
        );
    }
}