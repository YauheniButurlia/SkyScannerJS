import React from "react";
import {View} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';

import {styles} from './styles';

import {INITIAL_REGION} from '../../constants/constants';

const ICON_IMAGE = require('../../../assets/pin.png');

class Markers extends React.Component {
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
    
  });

export default connect(mapStateToProps, mapDispatchToProps)(Markers);