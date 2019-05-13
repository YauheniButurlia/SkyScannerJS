import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';

import {styles} from './styles';

class Places extends React.Component {
    render() {
        return(
        <View style={styles.container}>
            <FlatList
                data={this.props.data}
                renderItem={({item}) => <Text style={styles.item}
                onPress={() => this.props.navigation.navigate('Details',
                {key: item.key, id: item.num})}>{item.key}</Text>}/>
            </View>);
    }
}

const mapStateToProps = (state) => ({
    data: state.places.data,
});
  
  const mapDispatchToProps = dispatch => ({
    
  });

export default connect(mapStateToProps, mapDispatchToProps)(Places);