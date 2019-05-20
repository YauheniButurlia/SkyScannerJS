import React from "react";

export class PopUp extends React.Component {
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
                isVisible={this.state.settingsVisible}>
                <TouchableOpacity style={{flex:1}} onPress={() => this.toggleSettings()}>
                  <View style={{ height:'100%', width: '70%'}}>
                    <Text>
                      asdasd
                    </Text>
                  </View>
                </TouchableOpacity>
              </Modal>
              );      
    }
}