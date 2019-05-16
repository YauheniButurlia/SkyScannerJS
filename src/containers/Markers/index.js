import React from "react";
import {View, Alert} from 'react-native';
import {connect} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {withNavigation} from 'react-navigation';

import {download_markers} from '../../actions/markers';

import {styles} from './styles';

import {INITIAL_REGION} from '../../constants/constants';

const ICON_IMAGE = require('../../../assets/pin.png');

class Markers extends React.Component {

    componentDidMount(){
        this.props.download_markers();
    }

    componentDidUpdate(){

    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
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