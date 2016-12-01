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
import ActionButton from './components/ActionButton';
import StatusBar from './components/StatusBar';
import ListItem from './components/ListItem';
import MyScene from './components/MyScene';
import TabBar from './components/TabBar';
const styles = require('./styles.js')


class AwesomeProject extends Component {
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
      <View style={styles.container}>

        <StatusBar title="Impromptu" />
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>If you like</Text>
          <Text style={{fontSize:96}}>If you like</Text>
          <Text style={{fontSize:96}}>If you like</Text>
        </ScrollView>

        <ActionButton title="View" />
        <TabBar />

    </View>
  );
  }
}


AppRegistry.registerComponent('AwesomeProject', function() { return AwesomeProject });
