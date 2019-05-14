import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {download_places} from '../../actions/places';

import {styles} from './styles';
import {fetchPlaces} from "../../services/api";

class Places extends React.Component {

    arrayOfPlaces = [];

    componentDidMount(){
        this.props.download_places();
    }

    componentDidUpdate(){
        this.arrayOfPlaces = this.props.data.Places.map((item) => ({key: item.PlaceName, num: item.PlaceId}));
    }
    
    render() {
        return(
        <View style={styles.container}>
            <FlatList
                data={this.arrayOfPlaces}
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
    download_places: () => dispatch(download_places())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Places));