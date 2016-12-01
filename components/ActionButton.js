'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {color: '#ffffff'};

    setInterval(() => {
      let colorChoice = this.state.color === constants.actionColor ? '#ffffff' : constants.actionColor
     this.setState({ color: colorChoice });
   }, 1000);
 }

  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={this.state.color}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
