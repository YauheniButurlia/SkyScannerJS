import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, FlatList, Alert} from 'react-native';
import {TabViewAnimated, TabView, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';

import { listRepos } from './Reducer';

const firstRequest = '/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-01-01?inboundpartialdate=2019-09-01';
const secondRequest = '/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm';



export class Home extends React.Component {
    static navigationOptions = {
      title: 'Skyscanner',
      headerRight: <Button title={'Del'}
      onPress={() => console.log()}/>,
      headerLeft: <Button title={'Get'} onPress={() => Alert.alert("asd")}/>
    }

    onDelPressed(){
        fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm', {
          method: 'GET',
          headers: {
              'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
              'X-RapidAPI-Key': 'a45c7b6a8emshf8d62bbc6343fccp1b13dfjsn6bb5515281c4'
          }
      })
    .then((response) => response.json())
    .then((responseJson) => {
     console.log(responseJson.map(obj => ({key: obj.PlaceName, ...obj}))); //return responseJson;
    })
    }

    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Carriers' },
          { key: 'second', title: 'Places' },
        ],
      };

      _renderScene = ({ route }) => {
        switch (route.key) {
        case 'first':
          return <View style={{ backgroundColor: '#ff4081', flex: 1 }}>
          <FlatList
              data={[
{key: 'James'},
{key: 'Harry'},
{key: 'Robert'},
{key: 'Henry'},
]} //this.props.data1
              renderItem={({item}) => <Text style={styles.item}
              onPress={() => this.props.navigation.navigate('Details',
              {key: item.key,})}>{item.key}</Text>}
          />
      </View>;
        case 'second':
          return <View style={{ backgroundColor: '#673ab7', flex: 1 }}>
          <FlatList
            data={this.props.data2}
            renderItem={({item}) => <Text style={{color: 'red'}}>{item.key}</Text>}
          />
      </View>;
        default:
          return null;
        }
      };
   
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
             />
        );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scene: {
        flex: 1,
      },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
            borderWidth: 2
        },
  });
/********************************************************************************************/
  const mapStateToProps = state => {
    let storedRepositories = state.data.map(repo => ({ key: repo.id, ...repo }));
    return {
      data: storedRepositories
    };
  };
 
  const mapDispatchToProps = {
    listRepos
  };
 
  export default connect(mapStateToProps, mapDispatchToProps)(Home);