import React from 'react';
import {View, Button} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from './styles';
import InputField from '../InputField';

export default class TwoRowModal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            firstField: '',
            secondField: ''
        }
    }

    render() {
        return(
            <Modal
                hideModalContentWhileAnimating={true}
                useNativeDriver={true}
                coverScreen={false}
                isVisible={this.props.isVisible}>
                    <View style={styles.content}>

                        <View style={styles.fieldsContainer}>
                            <InputField 
                                field={this.props.firstField} 
                                onChangeText={(text) => this.setState({firstField: text})}/>
                            <InputField 
                                field={this.props.secondField} 
                                onChangeText={(text) => this.setState({secondField: text})}/>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <Button 
                                onPress={() => {
                                    const {firstField, secondField} = this.state;
                                    if(firstField === '' ||secondField === ''){
                                        this.props.cancelHandler();
                                    } else {
                                        this.props.addHandler({key: firstField, num: secondField});
                                        this.props.cancelHandler();
                                    }
                                    }
                                }
                                title="ADD"
                            />
                            <Button 
                                onPress={this.props.cancelHandler}
                                title="CANCEL"
                            />
                        </View>
                    </View>
            </Modal>
        );
    }
}