'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Button, Text, View, Image, ListView, TouchableOpacity, TextInput, Alert} = ReactNative;

export default class Card extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),

      collapsed: true
    };
  }

  _getCommentView(name, comment) {
    return <View style={{flex: 1, flexDirection: 'column',marginLeft: 30, }}>
      <Text style={{fontWeight: 'bold'}}>{name}</Text>
      <Text >{comment}</Text>
    </View>
  }

  _getCollapsableComments() {
    if (this.state.collapsed && this.state.dataSource.getRowCount() > 2) {
      return (
          <View >
            <TouchableOpacity
              onPress={
              () => {this.setState({collapsed: false})
            }}>
            <Text style={{fontSize: 12, textAlign: 'center'}}>Previous comment</Text>
            </TouchableOpacity>
            {this._getCommentView(this.state.dataSource.getRowData(0, 0), "blah")}
            {this._getCommentView(this.state.dataSource.getRowData(0, 1), "blah")}

          </View>
        )
    }

    return (
      <View >
        <TouchableOpacity
          onPress={
          () => {this.setState({collapsed: true})
        }}>
        <Text style={{fontSize: 12, textAlign: 'center'}}>Collapse</Text>
        </TouchableOpacity>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._getCommentView(rowData, "blah")}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flex:1, borderRadius: 30, borderColor:"#EEEEEE", backgroundColor:"white"}}>
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 30, marginTop:10, marginVertical: 10}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                source = {require('../img/diego-circle.gif')} style={{width: 45, height: 45}}/>
              <View style={{flex: 1, flexDirection: 'column',marginLeft: 30, }}>
                <Text style={{lineHeight: 25, fontWeight: 'bold', marginRight:30}}>{this.props.name} </Text>
                <Text>{this.props.description}</Text>
              </View>
            </View>
          </View>


          {this._getCollapsableComments()}

          <View style={{flex: 1, flexDirection: 'row', marginLeft: 30, marginVertical: 10}}>
            <Image
            source = {require('../img/diego-circle.gif')} style={{width: 45, height: 45}}/>
            <View style={{borderBottomColor: '#000000', borderBottomWidth: 1, marginLeft: 10,}}>
              <TextInput
                multiline = {true}
                style={{width: 200, height: 45, }}
                placeholder="Add a comment"
                onChangeText={(text) => this._getCommentView({text})}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
