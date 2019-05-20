import React from "react";
import {View, FlatList, Text, Alert} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from './styles';
import { withNavigation } from "react-navigation";

class PopUp extends React.Component {
    data = [{name: 'Save'},{name: 'Load'},{name: 'New'},{name: 'Eport'},{name: 'Settings'},{name: 'About'}];
   
    _pressHandler(index){
      switch(index) {
        case 1:
          this._loadSomethingBig();
          break;
        case 5:
          this.props.navigation.navigate('About');
          break;
      }
    }
    jsonData = [];

    _loadSomethingBig() {
      
    }
    
    render() {
        return (
              <Modal
                backdropOpacity={0}
                style={styles.modal}
                animationIn="slideInDown"
                animationOut="slideOutUp"
                hideModalContentWhileAnimating={true}
                useNativeDriver={true}
                coverScreen={false}
                isVisible={this.props.settingsVisible}>
            
                <View>
                  <FlatList 
                    style={{height: 50}}
                    data={this.jsonData}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                    />
                  <FlatList 
                    data={this.data.map((item, index) => ({name: item.name, key: String(index)}))}
                    renderItem={({item, index}) => 
                    <View style={{borderBottomWidth:1, alignItems: 'center'}}>
                      <Text onPress={() => this._pressHandler(index)} style={styles.item}>
                        {item.name}
                      </Text>
                    </View>
                    }/>
                </View>

              </Modal>
              );      
    }
}

export default withNavigation(PopUp);