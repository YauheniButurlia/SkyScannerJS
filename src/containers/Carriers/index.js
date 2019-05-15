import React from "react";
import {View, Text, FlatList, Modal, Alert} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {download_carriers, add_carrier} from '../../actions/carriers';


import Card from '../../components/Card';
import TwoRowModal from '../../components/MyModal'
import {styles} from './styles';
import FloatingActionButton from "../../components/FAB";

class Carriers extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    
    toggle() {
        this.setState({modalVisible: !this.state.modalVisible});
    }
    
    componentDidMount(){
        this.props.download_carriers();
    }

    render() {
        return(
        <View style={styles.container}>
            <TwoRowModal
                addHandler={this.props.add_carrier}
                cancelHandler={this.toggle}
                isVisible={this.state.modalVisible}
                firstField={'Carrier'}
                secondField={'CarrierID'}
                />
            <FlatList
                data={this.props.data}
                renderItem={({item}) => 
                    <Card data={item} onPress={() => this.props.navigation.navigate('Details', {key: item.key, id: item.num})}/>
                }/>
            <FloatingActionButton onPress={() => this.toggle()}/>
        </View>);
    }
}

const mapStateToProps = (state) => ({
    data: state.carriers.data
});
  
const mapDispatchToProps = dispatch => ({
    add_carrier: (data) => dispatch(add_carrier(data)),
    download_carriers: () => dispatch(download_carriers())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Carriers));