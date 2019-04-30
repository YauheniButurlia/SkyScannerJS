import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, FlatList, Alert} from 'react-native';
import {TabView} from 'react-native-tab-view';
import { connect } from 'react-redux';

import {request, del, success, failure} from '../../src/actions/Actions';

import {API_KEY, MAIN_HOST, CARRIERS_REQUEST, PLANES_REQUEST} from '../../src/constants/Constants'
/*
const firstRequest = '/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-05-01?inboundpartialdate=2019-09-01';
const secondRequest = '/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm';
*/
export class Home extends React.Component {
  
    static navigationOptions = ({navigation}) => {
      return {
        title: 'Skyscanner',

        headerRight: <Button title={'Del'}
        onPress={navigation.getParam('delete')}/>,//() => console.log(navigation.getParam('index')())

        headerLeft: <Button title={'Get'} 
        onPress={navigation.getParam('download')}/>
      }
    }

    componentDidMount() {
      this.props.navigation.setParams({ download: this._download, delete: this._delete});
    }

    _getIndex = () => {
      return this.state.index;
    }

    _download = () => {
      const index = this.state.index;
      this.props.request(index);
      if(index === 0){
        fetch(MAIN_HOST + CARRIERS_REQUEST, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': MAIN_HOST,
            'X-RapidAPI-Key': API_KEY
        }
      })
    .then((response) => response.json())
    .then((responseJson) => 
     this.props.success(0,responseJson.Carriers.map(function(item){return({key: item.Name, num: item.CarrierId});}))//{key: item.Name}   this.props.success(this.state.index, 
    ).catch((err) => this.props.failure(0, err.message));
      }
       else {
        fetch(MAIN_HOST + PLANES_REQUEST, {
          method: 'GET',
          headers: {
              'X-RapidAPI-Host': MAIN_HOST,
              'X-RapidAPI-Key': API_KEY
          }
        })
      .then((response) => response.json())
      .then((responseJson) => 
       this.props.success(1,responseJson.Places.map(function(item){return({key: item.PlaceName, num: item.PlaceId});}))//{key: item.Name}   this.props.success(this.state.index, 
      ).catch((err) => this.props.failure(1, err.message));
       }
      
    }

    _delete = () => {
      this.props.del(this.state.index);
    }

    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Carriers' },
          { key: 'second', title: 'Places' },
        ],
      };

      _renderScene = ({ route }) => {
        switch (route.key) {
        case 'first':
          return <View style={{ backgroundColor: '#ff4081', flex: 1 }}>
              <FlatList
                  data={this.props.data1} //this.props.data1
                  renderItem={({item}) => <Text style={styles.item}
                  onPress={() => this.props.navigation.navigate('Details',
                  {key: item.key, id: item.num})}>{item.key}</Text>}
              /></View>;
        case 'second':
          return <View style={{ backgroundColor: '#673ab7', flex: 1 }}>
              <FlatList
                data={this.props.data2}
                renderItem={({item}) => <Text style={styles.item}
                onPress={() => this.props.navigation.navigate('Details',
                {key: item.key, id: item.num})} //this.props.onSuccess(2, [{key: 'hi'},{key: 'say'}])
                >{item.key}</Text>}
              /></View>;
        default:
          return null;
        }
      };
   
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
             />
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
    scene: {
        flex: 1,
      },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
            borderWidth: 2
        },
  });
/********************************************************************************************/



const mapStateToProps = (state) => {
  console.log(state);
  return ({
  data1: state.data1,
  data2: state.data2,
})};

const mapDispatchToProps = dispatch => ({
  request: (id) => dispatch(request(id)),
  success: (id,info) => dispatch(success(id,info)),
  del: (id) => dispatch(del(id)),
  failure: (id,err) => dispatch(failure(id,err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);