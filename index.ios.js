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
import ListItem from './components/ListItem';
import TabBarExample from './components/TabBar';
import Card from './components/Card'
const styles = require('./styles.js')

console.disableYellowBox = true;
/*class Impromptu extends Component {
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
        <ScrollView>

         <Card />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
        </ScrollView>
  );
  }
}*/


AppRegistry.registerComponent('impromptu', function() { return TabBarExample });
