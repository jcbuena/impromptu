'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import Header from './Header'
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Text, View, Image, ListView, TouchableOpacity, TextInput, Alert} = ReactNative;

export default class Card extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  _onPressButton = () => {
  Alert.alert('Button has been pressed!');
};
  render() {
    return (
      <View>
        <Header />
        <TouchableOpacity onPress={this._onPressButton}>
          <Image
            style={{width: 375, height: 375}}
            source={require('../img/Thumbnail1.png')} resizeMode = 'stretch'
          />
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginVertical: 10}}>
          <Image
          source = {require('../img/diego-circle.gif')} style={{width: 45, height: 45}}/>
        <View style={{borderBottomColor: '#000000', borderBottomWidth: 1, marginLeft: 10,}}>
        <TextInput
          multiline = {true}
          style={{width: 200, height: 45, }}
          placeholder="Add a comment"
          onChangeText={(text) => this.setState({text})}
        />
        </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, marginVertical: 10}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        </View>
      </View>
    );
  }
}
