import React from 'react';
import {TouchableOpacity, Alert, View, Button, Dimensions, Text, ToolbarAndroid} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';

import { GEO_TAB_INDEX, PLANES_TAB_INDEX, CARRIERS_TAB_INDEX, CALC_TAB_INDEX} from '../../constants/constants'

import Carriers from '../Carriers';
import Markers from '../Markers';
import Places from '../Places';
import Calc from '../Calc';
import Header from '../../components/Header';

import {change_tab} from '../../actions/nav';

export class Home extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        settingsVisible: false,
        index: 0,
        routes: [
          { key: CARRIERS_TAB_INDEX, title: 'Carriers' },
          { key: PLANES_TAB_INDEX, title: 'Places' },
          { key: GEO_TAB_INDEX, title: 'Geo'},
          { key: CALC_TAB_INDEX, title: 'Calc'}
        ],
      };
      this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings() {
      this.setState({settingsVisible: !this.state.settingsVisible});
    }

    static navigationOptions = ({navigation}) => {
      return {
        header: <Header toggleSettings={navigation.getParam('settings')} appName={'AwesomeApp'}/>
      }
    };

    componentDidMount() {
      this.props.navigation.setParams({ settings: this.toggleSettings });
    }

      _renderScene = ({ route }) => {
        switch (route.key) {
          case CARRIERS_TAB_INDEX:
            return <Carriers />; 
          case PLANES_TAB_INDEX:
            return <Places />;
          case GEO_TAB_INDEX:
            return <Markers />;
          case CALC_TAB_INDEX:
            return <Calc />;
          default:
            return null;
        }
      };

   
    render() {
        return (
            <View style={{flex:1}}>
              <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Modal
                  backdropOpacity={0}
                  style={{backgroundColor: 'white', height:200, width: '70%'}}
                  animationIn="slideInDown"
                  animationOut="slideOutUp"
                  hideModalContentWhileAnimating={true}
                  useNativeDriver={true}
                  coverScreen={false}
                  isVisible={this.state.settingsVisible}>
                  <TouchableOpacity onPress={() => this.toggleSettings()}>
                    <View style={{borderRadius: 20, backgroundColor: 'white', height:300, width: '70%'}}>
                      <Text>
                        asdasd
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Modal>
              </View>  
              <TabView
                  navigationState={this.state}
                  renderScene={this._renderScene}
                  onIndexChange={index => {this.setState({ index });this.props.change_tab(index)}}
                  initialLayout={{ width: Dimensions.get('window').width }}
              />
             </View>
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