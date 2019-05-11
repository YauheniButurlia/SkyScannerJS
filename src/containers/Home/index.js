import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, FlatList, Alert} from 'react-native';
import {TabView} from 'react-native-tab-view';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE  , Marker, Callout, MarkerAnimated} from 'react-native-maps';
import {CustomMarker} from '../../components/CustomMarker';

import {request, del, success, failure, uploadData} from '../../actions/Actions';
import {callFetch} from '../../services/api';
import {styles} from './styles'
import {API_KEY, MAIN_HOST, CARRIERS_REQUEST,
   PLANES_REQUEST, GEO_REQUEST, LIMIT_PARAM,
   OFFSET_PARAM, GEO_TAB_INDEX,
   PLANES_TAB_INDEX, CARRIERS_TAB_INDEX,
  INITIAL_REGION, HEADERS} from '../../constants/constants'

//AIzaSyCnFFWXNiz_ZJ5_OYi4iZrM6G8h_Ej_o24        google maps api key

//https://datasf.org/opendata/

//https://data.sfgov.org/resource/se33-6ad4.json?$limit=120   SF API ENDPOINT

//The locations of assets like trash cans, picnic tables, 
//benches, etc, operated and maintained by Rec and Park.



const icon = require('../../assets/pin.png');

const amountOfMarkers = 10;
let loadedAmount = 0;
const neededAmount = 80;
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

    _download = (id) => {
      const index = this.state.index;
      this.props.request(index);
      switch(index) {
        case CARRIERS_TAB_INDEX:
          this._fetchCarriers();
          break;
        case PLANES_TAB_INDEX:
          this._fetchPlanes();
          break;
        case GEO_TAB_INDEX:
          this._repeatedCall();
          break;
        default:
          break;
      }
    }

    _repeatedCall = () => {
      this._fetchGeo()
      .then(() => {
        this._fetchMarkers();
        if(loadedAmount < neededAmount) {
          this._repeatedCall();
        }
      });
    }

    _fetchCarriers = () => {
      callFetch('https://' + MAIN_HOST + CARRIERS_REQUEST, 
      HEADERS, 
      CARRIERS_TAB_INDEX, 
      'Carriers', 
      (item) => ({key: item.Name, num: item.CarrierId}), 
      this);
    }

    _fetchPlanes = () => {
      callFetch('https://' + MAIN_HOST + PLANES_REQUEST, 
      HEADERS, 
      PLANES_TAB_INDEX,
      'Places',
      (item) => ({key: item.PlaceName, num: item.PlaceId}),
      this);
    }

    _fetchGeo(){
      return new Promise(resolve => {
        setTimeout(() => resolve('resolved'), 200);
      })
    }

    _fetchMarkers = () => {
          offset = offset + amountOfMarkers + 1;

          callFetch(GEO_REQUEST + '?' + LIMIT_PARAM + amountOfMarkers + '&' + OFFSET_PARAM + offset,
          undefined,
          GEO_TAB_INDEX, 
          undefined,
          (item) => (
            {
              key: item.asset_id,
              title: item.map_label,
              desc: item.tma_asset_name,
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude)
            }),
          this)
          .then(loadedAmount = loadedAmount + amountOfMarkers);     
    }

    _delete = () => {
      if(this.state.index === GEO_TAB_INDEX) {
        offset = 0;
        loadedAmount = 0;
      }
      this.props.del(this.state.index);
    }

    state = {
        index: 0,
        routes: [
          { key: CARRIERS_TAB_INDEX, title: 'Carriers' },
          { key: PLANES_TAB_INDEX, title: 'Places' },
          { key: GEO_TAB_INDEX, title: 'GeoPoints'}
        ],
      };

      _renderScene = ({ route }) => {
        switch (route.key) {
        case CARRIERS_TAB_INDEX:
          return <View style={{ backgroundColor: '#ff4081', flex: 1 }}>
              <FlatList
                  data={this.props.data1} //this.props.data1
                  renderItem={({item}) => <Text style={styles.item}
                  onPress={() => this.props.navigation.navigate('Details',
                  {key: item.key, id: item.num})}>{item.key}</Text>}
              /></View>;
        case PLANES_TAB_INDEX:
          return <View style={{ backgroundColor: '#673ab7', flex: 1 }}>
              <FlatList
                data={this.props.data2}
                renderItem={({item}) => <Text style={styles.item}
                onPress={() => this.props.navigation.navigate('Details',
                {key: item.key, id: item.num})}
                >{item.key}</Text>}
              /></View>;
        case GEO_TAB_INDEX:
          return <View style={{flex: 1}}>
            <MapView
              cacheEnabled={true}
              style={styles.map}
              initialRegion={INITIAL_REGION}>
                {this.props.markers.map(marker => 
                  <Marker
                      title={marker.title}
                      description={marker.desc}
                      key={marker.key}
                      coordinate={marker}
                      icon={icon}/>)}
            </MapView>
          </View>
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
/********************************************************************************************/

const mapStateToProps = (state) => {
  //console.log(state);
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