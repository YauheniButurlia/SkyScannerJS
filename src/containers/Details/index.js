import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {styles} from './styles';


class Details extends React.Component {

    static navigationOptions = {
        title: 'Details Page',      
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image sourse={this.props.navigation.getParam('icon')}/>
          </View>
          <Text>{this.props.navigation.getParam('key')} {this.props.navigation.getParam('id')}</Text>
        </View>
      );
    }
  }
export default Details;


