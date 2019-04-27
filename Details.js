import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';



class Details extends React.Component {

    static navigationOptions = {
        title: 'Details Page',      
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>{this.props.navigation.getParam('key')}</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Details;


