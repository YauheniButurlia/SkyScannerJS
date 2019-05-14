import React from "react";
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {withNavigation} from 'react-navigation';

import {download_carriers} from '../../actions/carriers';


import Card from '../../components/Card';
import {styles} from './styles';

class Carriers extends React.Component {
    
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
                <Card item={item}/>}/>
            </View>);
    }
}

/*
<Text style={styles.item}
                    onPress={
                        () => this.props.navigation.navigate('Details', {key: item.key, id: item.num})}>
                        {item.key}
                </Text>
*/

const mapStateToProps = (state) => ({
    data: state.carriers.data
});
  
const mapDispatchToProps = dispatch => ({
    download_carriers: () => dispatch(download_carriers())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Carriers));