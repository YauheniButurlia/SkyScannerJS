import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, FlatList, Alert} from 'react-native';
import {TabView} from 'react-native-tab-view';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE  , Marker, Callout, MarkerAnimated} from 'react-native-maps';
import {CustomMarker} from '../../src/components/CustomMarker';

import {request, del, success, failure, uploadData} from '../../src/actions/Actions';

import {API_KEY, MAIN_HOST, CARRIERS_REQUEST,
   PLANES_REQUEST, GEO_REQUEST, LIMIT_PARAM, OFFSET_PARAM} from '../../src/constants/Constants'

//AIzaSyCnFFWXNiz_ZJ5_OYi4iZrM6G8h_Ej_o24        google maps api key

//https://datasf.org/opendata/

//https://data.sfgov.org/resource/se33-6ad4.json?$limit=120   SF API ENDPOINT

//The locations of assets like trash cans, picnic tables, 
//benches, etc, operated and maintained by Rec and Park.



const icon = require('../../assets/pin.png');
const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const amountOfMarkers = 30;
let offset = 0;

export class Home extends React.Component {

    
  
    static navigationOptions = ({navigation}) => {
      return {
        title: 'Skyscanner',

        headerRight: <Button title={'Del'}
        onPress={navigation.getParam('delete')}/>,

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
        fetch('https://' + MAIN_HOST + CARRIERS_REQUEST, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': MAIN_HOST,
            'X-RapidAPI-Key': API_KEY
        }
      })
    .then((response) => response.json())
    .then((responseJson) => 
     this.props.success(index, responseJson.Carriers.map(function(item){return({key: item.Name, num: item.CarrierId});}))//{key: item.Name}   this.props.success(this.state.index, 
    ).catch((err) => this.props.failure(index, err.message));
      }


       else if(index === 1){
        fetch('https://' + MAIN_HOST + PLANES_REQUEST, {
          method: 'GET',
          headers: {
              'X-RapidAPI-Host': MAIN_HOST,
              'X-RapidAPI-Key': API_KEY
          }})
          .then((response) => response.json())
          .then((responseJson) => 
       this.props.success(index,responseJson.Places.map(function(item){return({key: item.PlaceName, num: item.PlaceId});}))//{key: item.Name}   this.props.success(this.state.index, 
      ).catch((err) => this.props.failure(index, err.message));
       } 
       
       else if(index === 2){
          offset = offset + amountOfMarkers;
          fetch(GEO_REQUEST + '?' + LIMIT_PARAM + amountOfMarkers + '&' + OFFSET_PARAM + offset)
          .then((response) => response.json())
          .then((responseJson) => 
          this.props.success(index, responseJson.map(item => ({key: item.objectid, title: item.map_label, desc: item.tma_asset_name, latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude)})))//{key: item.Name}   this.props.success(this.state.index, 
          ).catch((err) => this.props.failure(index, err.message));
       
      }
      //       this.props.success(index, responseJson.map(item => ({latitude: item.latitude, longitude: item.longitude})))
    }

    _delete = () => {
      offset = 0;
      this.props.del(this.state.index);
    }

    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Carriers' },
          { key: 'second', title: 'Places' },
          { key: 'third', title: 'GeoPoints'}
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
                {key: item.key, id: item.num})}
                >{item.key}</Text>}
              /></View>;
        case 'third':
          return <View style={{flex: 1}}>
            <MapView
              cacheEnabled={true}
              style={styles.map}
              initialRegion={initialRegion}>
                {this.props.markers.map(marker => 
                <Marker
                    title={marker.title}
                    description={marker.desc}
                    key={marker.key}
                    coordinate={marker}
                    icon={icon}/>)}
            </MapView>
          </View>//0.0922  0.0421  {latitude: marker.latitude,longitude: marker.longitude}
        default:
          return null;
        }
      };

      /*
      <Marker coordinate={{latitude: 37.771229329999997,longitude: -122.49910441}}/>
      {this.state.markers.map(marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}/>
              ))}
      */
   
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
        map: {
          ...StyleSheet.absoluteFillObject,
        },
  });
/********************************************************************************************/



const mapStateToProps = (state) => {
  console.log(state);
  return ({
  data1: state.data1,
  data2: state.data2,
  markers: state.data3,
})};

const mapDispatchToProps = dispatch => ({
  request: (id) => dispatch(request(id)),
  success: (id,info) => dispatch(success(id,info)),
  del: (id) => dispatch(del(id)),
  failure: (id,err) => dispatch(failure(id,err)),
  uploadData: (id) => dispatch(uploadData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);