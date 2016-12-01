'use strict';
import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  AppRegistry,
  ListView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Navigator,
  TouchableHighlight,
} = ReactNative;
import StatusBar from './components/StatusBar';
import ListItem from './components/ListItem';
import MyScene from './components/MyScene';
import TabBar from './components/TabBar';
import Card from './components/Card'
const styles = require('./styles.js')


class Impromptu extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
    dataSource: ds.cloneWithRows([
      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    ])
  };
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <StatusBar title="Impromptu" />
        <ScrollView>

         <Card />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
        </ScrollView>

        <TabBar />

    </View>
  );
  }
}


AppRegistry.registerComponent('impromptu', function() { return Impromptu });
