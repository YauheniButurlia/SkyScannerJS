import React from 'react';
import {Button, Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {connect} from 'react-redux';

import { GEO_TAB_INDEX, PLANES_TAB_INDEX, CARRIERS_TAB_INDEX} from '../../constants/constants'

import Carriers from '../Carriers';
import Markers from '../Markers';
import Places from '../Places';

import {change_tab} from '../../actions/nav';
import {callFetch} from '../../services/api';

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
      switch(index) {
        case CARRIERS_TAB_INDEX:
          this._fetchCarriers();
          break;
        case PLANES_TAB_INDEX:
          this._fetchPlanes();
          break;
        case GEO_TAB_INDEX:
          this._fetchMarkers();//_repeatedCall();
          break;
        default:
          break;
      }
    }
/*
    _repeatedCall = () => {
      this._fetchGeo()
      .then(() => {
        this._fetchMarkers();
        if(loadedAmount < neededAmount) {
          this._repeatedCall();
        }
      });
    }
*/
    _fetchCarriers = () => {

    /*
      callFetch('https://' + MAIN_HOST + CARRIERS_REQUEST, 
      HEADERS,
      CARRIERS_TAB_INDEX, 
      'Carriers', 
      (item) => ({key: item.Name, num: item.CarrierId}), 
      this);
    */}

    _fetchPlanes = () => {
      /*
      callFetch('https://' + MAIN_HOST + PLANES_REQUEST, 
      HEADERS, 
      PLANES_TAB_INDEX,
      'Places',
      (item) => ({key: item.PlaceName, num: item.PlaceId}),
      this);
      */
    }

    _fetchGeo(){
      return new Promise(resolve => {
        setTimeout(() => resolve('resolved'), 200);
      })
    }

    _fetchMarkers = () => {

      /*
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
          
          */   
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
            return <Carriers />; 
          case PLANES_TAB_INDEX:
            return <Places />;
          case GEO_TAB_INDEX:
            return <Markers />;
          default:
            return null;
        }
      };

   
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                onIndexChange={index => {this.setState({ index });this.props.change_tab(index)}}
                initialLayout={{ width: Dimensions.get('window').width }}
             />
        );
    }
  }
/********************************************************************************************/

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  change_tab: (index) => dispatch(change_tab(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);