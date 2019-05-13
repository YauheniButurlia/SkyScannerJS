import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';

import {request_carriers, success_carriers, failure_carriers, delete_carriers} from '../../actions/carriers';

import {styles} from './styles';

class Carriers extends React.Component {
    componentDidMount(){
        this.props.request_carriers();
        this.props.success_carriers([{key:'Hi', num:3543},{key:'There', num:126534},{key:'ASDasdad', num:564}]);
    }
    render() {
        return(
        <View style={styles.container}>
            <FlatList
                data={this.props.data}
                renderItem={({item}) => 
                <Text style={styles.item}
                    onPress={
                        () => this.props.navigation.navigate('Details', {key: item.key, id: item.num})}>
                        {item.key}
                </Text>}/>
            </View>);
    }
}

const mapStateToProps = (state) => ({
    data: state.carriers.data,
});
  
  const mapDispatchToProps = dispatch => ({
    request_carriers: () => dispatch(request_carriers()),
    success_carriers: (data) => dispatch(success_carriers(data))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Carriers);