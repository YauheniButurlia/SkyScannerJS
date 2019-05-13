import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {request_places, success_places} from '../../actions/places';

import {styles} from './styles';

class Places extends React.Component {
    componentDidMount(){
        
    }

    componentDidUpdate(){
        if(this.props.loading === true){
            this.props.success_places([{key:'Hi', num:3543},{key:'There', num:126534},{key:'ASDasdad', num:564}]);
        }
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
    success_places: (data) => dispatch(success_places(data))
  });

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Places));