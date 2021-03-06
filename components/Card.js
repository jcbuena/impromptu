'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, Button, Text, View, Image, ListView, TouchableOpacity, TextInput, Alert} = ReactNative;

import Camera from 'react-native-camera';

import VideoView from '../native/Video.js';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
    this._data = this.props.comments
    this.state = {
      dataSource: this.ds.cloneWithRows(this._data),
      collapsed: true,
      comment: ''
    };
  }

  updateComments(comments) {
    this._data = comments

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    })
  }

  _postComment() {
    const comment = {name: 'Qingping', comment: this.state.comment}
    if (this._data && this._data.length > 0)
      this._data = this._data.concat(comment)
    else
      this._data = [comment]

    this.props.addComment(comment)

    console.log(this._data)

    this.setState({
      dataSource: this.ds.cloneWithRows(this._data),
      comment: ''
    })

    this.forceUpdate()
  }

  _getCommentView(data) {
    return (
      <View style={{marginLeft: 30}}>
        <Text style={{fontWeight: 'bold', lineHeight: 20, marginBottom: 5, marginTop: 5, fontFamily: 'Oxygen'}}>
          {data.name} <Text style={{fontWeight: 'normal'}}>{data.comment}</Text>
        </Text>
      </View>
    )
  }

  _getCollapsableComments() {
    if (this.state.dataSource.getRowCount() > 0)
    return (
      <View >
        {this.state.dataSource.getRowCount() > 2 &&
           (<TouchableOpacity
          style={{marginVertical: 5}}
          onPress={
          () => {this.setState({collapsed: !this.state.collapsed})
        }}>
          <Text style={{fontSize: 14,
            textAlign: 'center',
            lineHeight: 20,
            color: 'grey',
            fontFamily: 'Oxygen'
          }}>
            {this.state.collapsed ? "Previous comments...": "Collapse"}
          </Text>
        </TouchableOpacity>)}
        {this.state.collapsed && this.state.dataSource.getRowCount() > 2 ?
          (<View>
            {this._getCommentView(this.state.dataSource.getRowData(0, this.state.dataSource.getRowCount() - 2))}
            {this._getCommentView(this.state.dataSource.getRowData(0, this.state.dataSource.getRowCount() - 1))}
          </View>)
          :
          (<ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) => this._getCommentView(rowData)}
          />)}
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
        {this.props.videoName ?
            <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, marginTop:20, marginVertical: 10}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  source = {require('../img/diego-circle.gif')} style={{width: 45, height: 45}}/>
                <View style={{flex: 1, flexDirection: 'column',marginLeft: 10, }}>
                  <Text style={{lineHeight: 25, fontWeight: 'bold', marginRight:30, fontFamily: 'Oxygen'}}>{this.props.name} </Text>
                  <Text style={{fontFamily: 'Oxygen'}}>{this.props.description}</Text>
                </View>
              </View>
            </View>:
            <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, marginTop:20, marginVertical: 10}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  source = {this.props.pic} style={{width: 45, height: 45}}/>
                <View style={{flex: 1, flexDirection: 'column',marginLeft: 10, }}>
                  <Text style={{lineHeight: 25, fontWeight: 'bold', marginRight:30, fontFamily: 'Oxygen'}}>{this.props.name} </Text>
                  <Text style={{fontFamily: 'Oxygen'}}>{this.props.description}</Text>
                </View>
              </View>
            </View>}

          {this.props.videoName ? 
            <VideoView style={{width:360, height:300, marginBottom: 10}}
              path={this.props.videoName.path}
              file={this.props.videoName.file}
              muted = {this.props.muted}
              paused = {!this.state.playing}/>:
            <View style={{width:360, height:300, marginBottom:10}}/>}

          {this._getCollapsableComments()}

          <View style={{flex: 1, flexDirection: 'row', marginLeft: 15, marginVertical: 10}}>
            <Image
            source = {require('../img/qingping_circle.png')} style={{width: 45, height: 45}}/>
            <View style={{ marginLeft: 20, paddingTop: 10}}>
              <TextInput
                ref = {(textInput) => this.textInput = textInput}
                multiline = {true}
                style={{width: 200, height: 30, fontSize:14, borderBottomColor: 'grey', borderBottomWidth: 1, fontFamily: 'Oxygen'}}
                placeholder="Add a comment"
                onChangeText={(text) => this.setState({comment: text})}
                onFocus={() => {
                  this.props.scrollToElement(this.textInput)
                }}
                value={this.state.comment}
              />

            </View>
            <View style={{marginLeft: 15, marginTop: 6}}>
              <Button title="Post" onPress={this._postComment.bind(this)}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
