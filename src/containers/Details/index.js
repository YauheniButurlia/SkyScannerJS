import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {styles} from './styles';


class Details extends React.Component {

    static navigationOptions = {
        title: 'Details Page',      
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>{this.props.navigation.getParam('key')} {this.props.navigation.getParam('id')}</Text>
        </View>
      );
    }
  }
export default Details;


