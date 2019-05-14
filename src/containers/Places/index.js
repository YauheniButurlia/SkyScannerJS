import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {request_places, success_places, failure_places} from '../../actions/places';

import {styles} from './styles';
import {fetchPlaces} from "../../services/api";

class Places extends React.Component {
    componentDidMount(){
        
    }

    componentDidUpdate(){
        if(this.props.loading === true){
            this._loadData();
        }
    }

    _loadData(){
        fetchPlaces()
            .then(responceJson => this.props.success_places(responceJson.Places.map(
                (item) => ({key: item.PlaceName, num: item.PlaceId}))))
            .catch(error => this.props.failure_places(error.message));
    }

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
    loading: state.places.loading
});
  
const mapDispatchToProps = dispatch => ({
    request_places: () => dispatch(request_places()),
    success_places: (data) => dispatch(success_places(data)),
    failure_places: (arror) => dispatch(failure_places(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Places));