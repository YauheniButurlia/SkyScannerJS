import React from "react";
import {View, Text, FlatList, Modal, Alert} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {download_carriers} from '../../actions/carriers';


import Card from '../../components/Card';
import {styles} from './styles';
import FloatingActionButton from "../../components/FloatingActionButton";

class Carriers extends React.Component {

    state = {
        modalVisible: false,
    };
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    
    componentDidMount(){
        this.props.download_carriers();
    }

    componentDidUpdate(){

    }

    render() {
        return(
        <View style={styles.container}>
        
            <FlatList
                data={this.props.data}
                renderItem={({item}) => 
                    <Card data={item} onPress={() => this.props.navigation.navigate('Details', {key: item.key, id: item.num})}/>
                }/>
            <FloatingActionButton onPress={() => Alert.alert('Hi there')}/>
        </View>);
    }
}

const mapStateToProps = (state) => ({
    data: state.carriers.data
});
  
const mapDispatchToProps = dispatch => ({
    download_carriers: () => dispatch(download_carriers())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Carriers));