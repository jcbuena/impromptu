import React, {Component} from 'react';
import ReactNative from 'react-native';
const { StyleSheet, Button, Text, View, Image, ListView, TouchableOpacity, TextInput, Alert} = ReactNative

export default class ChallengeCard extends Component {
  super(props) {

  }

  render() {
    return (
      <View style={{flex:1, padding:7.5}}>
        <View style={{flex:1, borderRadius: 10, borderColor:"#EEEEEE", backgroundColor:"white", paddingRight: 12.5}}>
          <View style={{flex: 1, flexDirection: 'column', marginLeft: 15, marginTop:20, marginVertical: 10}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                source = {this.props.pic} style={{width: 45, height: 45}}/>
              <View style={{flex: 1, flexDirection: 'column',marginLeft: 10, }}>
                <Text style={{lineHeight: 25, fontWeight: 'bold', marginRight:30, fontFamily: 'Oxygen'}}>{this.props.name} </Text>
                <Text style={{fontFamily: 'Oxygen'}}>{this.props.description}</Text>
              </View>
            </View>
          </View>


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
                // value={this.state.comment}
              />

            </View>
            <View style={{marginLeft: 15, marginTop: 6}}>
              <Button title="Post" onPress={null}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
