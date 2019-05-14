import React from "react";
import {View} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {withNavigation} from 'react-navigation';

import {request_markers, success_markers, failure_markers, download_markers} from '../../actions/markers';
import {fetchMarkers} from '../../services/api';

import {styles} from './styles';

import {INITIAL_REGION} from '../../constants/constants';

const ICON_IMAGE = require('../../../assets/pin.png');

class Markers extends React.Component {

    componentDidMount(){
        this.props.download_markers();
    }

    componentDidUpdate(){
        
    }

    _loadData(){
        fetchMarkers()
            .then(responceJson => this.props.success_markers(responceJson.map(
            (item) => (
            {
                key: item.asset_id,
                title: item.map_label,
                desc: item.tma_asset_name,
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude)
            }))))
            .catch(error => this.props.failure_markers(error.message))
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                    cacheEnabled={true}
                    style={styles.map}
                    initialRegion={INITIAL_REGION}>
                        {this.props.data.map((marker, index) => 
                            <Marker
                                title={marker.title}
                                description={marker.desc}
                                key={index}
                                coordinate={marker}
                                icon={ICON_IMAGE}/>)}
                </MapView>
            </View>
          );
    }
}

const mapStateToProps = (state) => ({
    data: state.markers.data,
});
  
const mapDispatchToProps = dispatch => ({
    download_markers: () => dispatch(download_markers())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Markers));