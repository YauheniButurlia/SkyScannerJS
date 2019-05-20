import React from "react";
import {View, FlatList, Text} from 'react-native';
import Modal from 'react-native-modal';

export default class PopUp extends React.Component {
    data = [{name: 'Save'},{name: 'Load'},{name: 'New'},{name: 'Eport'},{name: 'Settings'},{name: 'About'}];
    render() {
        return (
              <Modal
                backdropOpacity={0}
                style={{backgroundColor: 'white', height:'100%', width: '90%'}}
                animationIn="slideInDown"
                animationOut="slideOutUp"
                hideModalContentWhileAnimating={true}
                useNativeDriver={true}
                coverScreen={false}
                isVisible={this.props.settingsVisible}>
            
                <View>
                  <FlatList 
                    data={this.data.map((item, index) => ({name: item.name, key: String(index)}))}
                    renderItem={({item}) => 
                      <Text style={{padding: 10, fontSize: 18, height: 44}}>{item.name}</Text>
                    }/>
                </View>

              </Modal>
              );      
    }
}