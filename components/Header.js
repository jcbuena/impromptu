'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Text, Image, View} = ReactNative;

export default class Header extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', marginLeft: 10, marginTop:10, marginVertical: 10}}>

        <View style={{flex: 1, flexDirection: 'row'}}>

          <Image
            source = {require('../img/diego-circle.gif')} style={{width: 45, height: 45}}/>

          <View style={{flex: 1, flexDirection: 'column',marginLeft: 10, }}>
            <Text style={{lineHeight: 25, fontWeight: 'bold'}}>Name </Text>
            <Text>Challenge</Text>
          </View>
        </View>
     </View>
    );
  }
}
