import React from 'react';
import {Button, Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {connect} from 'react-redux';

import { GEO_TAB_INDEX, PLANES_TAB_INDEX, CARRIERS_TAB_INDEX} from '../../constants/constants'

import Carriers from '../Carriers';
import Markers from '../Markers';
import Places from '../Places';

import {request_carriers, delete_carriers} from '../../actions/carriers';
import {request_markers, delete_markers} from '../../actions/markers';
import {request_places, delete_places} from '../../actions/places';
import {change_tab} from '../../actions/nav';

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
          this.props.request_carriers();
          break;
        case PLANES_TAB_INDEX:
          this.props.request_places();
          break;
        case GEO_TAB_INDEX:
          this.props.request_markers();
          break;
        default:
          break;
      }
    }

    _delete = () => {
      const index = this.state.index;
      switch(index) {
        case CARRIERS_TAB_INDEX:
          this.props.delete_carriers();
          break;
        case PLANES_TAB_INDEX:
          this.props.delete_places();
          break;
        case GEO_TAB_INDEX:
          this.props.delete_markers();
          break;
        default:
          break;
      }
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
                onIndexChange={index => {this.setState({ index })}}//;this.props.change_tab(index)
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

  request_carriers: () => dispatch(request_carriers()),
  delete_carriers: () => dispatch(delete_carriers()),

  request_places: () => dispatch(request_places()),
  delete_places: () => dispatch(delete_places()),

  request_markers: () => dispatch(request_markers()),
  delete_markers: () => dispatch(delete_markers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);