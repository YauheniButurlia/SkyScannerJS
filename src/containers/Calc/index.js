import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Alert, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

import Chooser from '../../components/Chooser';

import {styles} from './styles';

class Calc extends React.Component {
    images = [
        require('../../../assets/close.png'),
        require('../../../assets/doc.png'),
        require('../../../assets/house.png'),
        require('../../../assets/music.png'),
        require('../../../assets/laptop.png'),
        require('../../../assets/pin.png'),
    ]
    data = [
        {key: 'a', icon: this.images[0]},
        {key: 'b', icon: this.images[1]},
        {key: 'c', icon: this.images[2]},
        {key: 'd', icon: this.images[3]},
        {key: 'e', icon: this.images[4]},
        {key: 'f', icon: this.images[5]},
        {key: 'g', icon: this.images[2]},
        {key: 'k', icon: this.images[4]},
        {key: 'l', icon: this.images[1]}
    ];

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.progressContainer}>
                    <Chooser 
                        name={'Time fix'}
                        unit={'h'}
                        minValue={1}
                        maxValue={40}
                        initialValue={20}
                        step={1}
                        />
                </View>
                <View style={styles.sliderContainer}>
                    <FlatList
                        horizontal={true}
                        data={this.data}
                        renderItem={({item}) => 
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {key: item.key, id: item.key, icon: item.icon})}>
                            <View style={styles.sliderItem}>
                                <Image source={item.icon}/>
                            </View>
                        </TouchableOpacity>
                        }  
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(Calc);