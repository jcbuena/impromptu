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
class Impromptu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <TabBarExample/>
        </View>
  );
  }
}


AppRegistry.registerComponent('impromptu', function() { return Impromptu });
