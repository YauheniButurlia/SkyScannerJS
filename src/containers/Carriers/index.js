import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {request_carriers, success_carriers, failure_carriers} from '../../actions/carriers';
import {fetchCarriers} from '../../services/api';

import {styles} from './styles';

class Carriers extends React.Component {

    componentDidMount(){
        
    }

    componentDidUpdate(){
        if(this.props.loading === true){
            this._loadData();
        }
    }

    _loadData(){
        fetchCarriers()
                .then(responceJson => this.props.success_carriers(responceJson.Carriers.map(
                    (item) => ({key: item.Name, num: item.CarrierId}))))
                .catch(error => this.props.failure_carriers(error.message));
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
    loading: state.carriers.loading
});
  
const mapDispatchToProps = dispatch => ({
    request_carriers: () => dispatch(request_carriers()),
    success_carriers: (data) => dispatch(success_carriers(data)),
    failure_carriers: (error) => dispatch(failure_carriers(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Carriers));