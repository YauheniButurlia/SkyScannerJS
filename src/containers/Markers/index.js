import React from "react";
import {View} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {withNavigation} from 'react-navigation';

import {request_markers, success_markers, failure_markers} from '../../actions/markers';

import {styles} from './styles';

import {INITIAL_REGION} from '../../constants/constants';
import {GEO_REQUEST, LIMIT_PARAM, OFFSET_PARAM} from '../../config';

const ICON_IMAGE = require('../../../assets/pin.png');

class Markers extends React.Component {

    componentDidMount(){
        
    }

    componentDidUpdate(){
      if(this.props.loading === true){
        this._loadData();
      }
    }

    _loadData(){
      fetch(GEO_REQUEST + '?' + LIMIT_PARAM + 50 + '&' + OFFSET_PARAM + 0)
        .then(responce => responce.json())
        .then(responceJson => this.props.success_markers(responceJson.map(
          (item) => (
          {
            key: item.asset_id,
            title: item.map_label,
            desc: item.tma_asset_name,
            latitude: parseFloat(item.latitude),
            longitude: parseFloat(item.longitude)
          })))
          .catch(error => this.propr.failure_markers(error.message))
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                    cacheEnabled={true}
                    style={styles.map}
                    initialRegion={INITIAL_REGION}>
                        {this.props.data.map(marker => 
                            <Marker
                                title={marker.title}
                                description={marker.desc}
                                key={marker.key}
                                coordinate={marker}
                                icon={ICON_IMAGE}/>)}
                </MapView>
          </View>
          );
    }
}

const mapStateToProps = (state) => ({
    data: state.markers.data,
    loading: state.markers.loading
});
  
const mapDispatchToProps = dispatch => ({
    request_markers: () => dispatch(request_markers()),
    success_markers: (data) => dispatch(success_markers(data)),
    failure_markers: (error) => dispatch(failure_markers(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Markers));