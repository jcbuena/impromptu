'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Button, Text, View, Image, ListView, TouchableOpacity, TextInput, Alert} = ReactNative;

import VideoView from '../native/Video.js';

export default class Card extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: 'Qingping',
          comment: 'Wow I love the artistry in this conducting!'
        },
        {
          name: 'Diego',
          comment: 'Great! I LOVE THE ARTISTRY TOO!'
        },
        // {
        //   name: 'Chen',
        //   comment: 'Cool'
        // }
      ]),
      collapsed: true,
      playing: false,
    };
  }

  _postComment(){

  }

  _getCommentView(data) {
    return (
      <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: 'bold', lineHeight: 20, marginBottom: 5, marginTop: 5}}>
          {data.name} <Text style={{fontWeight: 'normal'}}>{data.comment}</Text>
        </Text>
      </View>
    )
  }

  _getCollapsableComments() {
    if (this.state.collapsed && this.state.dataSource.getRowCount() >= 2) {
      return (
          <View >
            <TouchableOpacity
              onPress={
              () => {this.setState({collapsed: false})
            }}>
              <Text style={{fontSize: 14, textAlign: 'center', lineHeight: 20, color: 'grey'}}>Previous comments...</Text>
            </TouchableOpacity>
            {this._getCommentView(this.state.dataSource.getRowData(0, 0))}
            {this._getCommentView(this.state.dataSource.getRowData(0, 1))}

          </View>
        )
    }

    return (
      <View >
        <TouchableOpacity
          onPress={
          () => {this.setState({collapsed: true})
        }}>
        <Text style={{fontSize: 14, textAlign: 'center', lineHeight: 20, color: 'grey'}}>Collapse</Text>
        </TouchableOpacity>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._getCommentView(rowData, "sflksdjfsl;fj sld;kfjsakl;fjas dkl;fjsadkl;lsjfsla djflads;jfkslad;fjklsa d;fjsadlk;fjasdkl; fdjskl;")}
        />
      </View>
    )
  }

  onLayout(event){
  console.log(event.nativeEvent.layout)
}

  render() {
    return (
      <View style={{flex:1, padding:7.5}}>
        <View style={{flex:1, borderRadius: 10, borderColor:"#EEEEEE", backgroundColor:"white"}}>
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, marginTop:20, marginVertical: 10}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                source = {require('../img/diego-circle.gif')} style={{width: 45, height: 45}}/>
              <View style={{flex: 1, flexDirection: 'column',marginLeft: 10, }}>
                <Text style={{lineHeight: 25, fontWeight: 'bold', marginRight:30}}>{this.props.name} </Text>
                <Text>{this.props.description}</Text>
              </View>
            </View>
          </View>

          <VideoView style={{width:400, height:500}}
          paused = {!this.state.playing}/>

          {this._getCollapsableComments()}

          <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, marginVertical: 10}}>
            <Image
            source = {require('../img/qingping-circle.gif')} style={{width: 45, height: 45}}/>
            <View style={{ marginLeft: 20, paddingTop: 10}}>
              <TextInput
                ref = {(textInput) => this.textInput = textInput}
                multiline = {true}
                style={{width: 200, height: 30, fontSize:14, borderBottomColor: 'grey', borderBottomWidth: 1}}
                placeholder="Add a comment"
                onChangeText={(text) => this._getCommentView({text})}
                onFocus={() => this.props.scrollToElement(this.textInput)}
              />

            </View>
            <View style={{marginLeft: 15, marginTop: 6}}>
              <Button title="Post" onPress={this._postComment}/>
            </View>

          </View>
        </View>
      </View>
    );
  }
}
