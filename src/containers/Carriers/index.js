import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {download_carriers} from '../../actions/carriers';

import {styles} from './styles';

class Carriers extends React.Component {
    arrayOfCarriers = [];

    componentDidMount(){
        this.props.download_carriers();
    }

    componentDidUpdate(){
        this.arrayOfCarriers = this.props.data.Carriers.map((item) => ({key: item.Name, num: item.CarrierId}));
    }

    render() {
        return(
        <View style={styles.container}>
            <FlatList
                data={this.arrayOfCarriers}
                renderItem={({item}) => 
                <Text style={styles.item}
                    onPress={
                        () => this.props.navigation.navigate('Details', {key: item.key, id: item.num})}>
                        {item.key}
                </Text>}/>
            </View>);
    }
}

const mapStateToProps = (state) => ({
    data: state.carriers.data,
});
  
const mapDispatchToProps = dispatch => ({
    download_carriers: () => dispatch(download_carriers())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Carriers));