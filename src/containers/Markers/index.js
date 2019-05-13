import React from "react";
import {View} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {withNavigation} from 'react-navigation';

import {request_markers, success_markers} from '../../actions/markers';

import {styles} from './styles';

import {INITIAL_REGION} from '../../constants/constants';

const ICON_IMAGE = require('../../../assets/pin.png');

class Markers extends React.Component {
    componentDidMount(){
        this.props.request_markers();
      this.props.success_markers([{key: 345, title: '12313', desc: 'ihfashfipsuhfiuas',
    latitude: 37.782846, longitude: -122.470037},{key: 12, title: '1233553', desc: 'ih253423424suhfiuas',
    latitude: 37.783046, longitude: -122.460137}]);
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
});
  
  const mapDispatchToProps = dispatch => ({
    request_markers: () => dispatch(request_markers()),
    success_markers: (data) => dispatch(success_markers(data))
  });

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Markers));