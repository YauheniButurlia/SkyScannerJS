import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from './styles';
import InputField from '../InputField';

export default class TwoRowModal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            details: ''
        }
    }

    render() {
        return(
            <Modal
                coverScreen={false}
                isVisible={this.props.isVisible}>
                    <View style={styles.content}>

                        <View style={styles.fieldsContainer}>
                            <InputField 
                                field={this.props.firstField} 
                                onChangeText={(text) => this.setState({name: text})}/>
                            <InputField 
                                field={this.props.secondField} 
                                onChangeText={(text) => this.setState({details: text})}/>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button 
                                onPress={() => {
                                    const {name, details} = this.state;
                                    if(name === '' ||details === ''){
                                        this.props.cancelHandler();
                                    } else {
                                        this.props.addHandler({key: name, num: details});
                                        this.props.cancelHandler();
                                    }
                                    }
                                }
                                title="V"
                            />
                            <Button 
                                onPress={this.props.cancelHandler}
                                title="X"
                            />
                        </View>
                    </View>
            </Modal>
        );
    }
}