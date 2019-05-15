import React from "react";
import {View, Text, FlatList, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

import Card from '../../components/Card';
import FloatingActionButton from "../../components/FAB";
import MyModal from "../../components/MyModal";

import {download_places, add_place} from '../../actions/places';

import {styles} from './styles';

class Places extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
        };

        this.toogle = this.toogle.bind(this);
    }

    componentDidMount(){
        this.props.download_places();
    }

    toogle() {
        this.setState({modalVisible: !this.state.modalVisible});
    }
    
    render() {
        return(
        <View style={styles.container}>
            <MyModal
                addHandler={this.props.add_place}
                cancelHandler={this.toogle}
                isVisible={this.state.modalVisible}
                firstField={'Place'}
                secondField={'PlaceID'}
                />
            <FlatList
                data={this.props.data}
                renderItem={({item}) => <Card data={item} onPress={() => this.props.navigation.navigate('Details', {key: item.key, id: item.num})}/>}/>
            <FloatingActionButton onPress={() => this.toogle()}/>
        </View>);
    }
}

const mapStateToProps = (state) => ({
    data: state.places.data,
});
  
const mapDispatchToProps = dispatch => ({
    add_place: (data) => dispatch(add_place(data)),
    download_places: () => dispatch(download_places())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Places));