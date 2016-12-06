import React from 'react'
import {View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native'

import FriendSelectorView from './FriendSelectorView.js'

export default class SendChallengeView extends React.Component {
  super(props) {

  }

  _loadFriendSelector() {
    this.props.navigator.push({
      component: FriendSelectorView,
      title: 'Send to Friends',
      leftButtonTitle: '<',
      tintColor: 'white',
      onLeftButtonPress: () => this.props.navigator.pop(),
    })
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1, flexDirection: 'column', backgroundColor: '#EEEEEE'}}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'}}>
            <TextInput
              style={{
                height: 70,
                width: 315,
                paddingLeft: 15
              }}
              placeholder='Type your challenge here...'
              autoFocus={true}
            />
            <Button title='Send' onPress={this._loadFriendSelector.bind(this)}/>
        </View>
        <View style={{flex: 1, marginVertical: 20}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
            Featured
          </Text>
        </View>
        <View style={{
          flex: 1,
          height: 175,
          width: 350,
          backgroundColor: 'white',
          borderRadius: 10
        }}>
          <View style={{flex: 1, borderBottomWidth: 1.5, borderBottomColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={this._loadFriendSelector.bind(this)}>
              <Text style={{textAlign: 'center'}}>Perform like you're underwater</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, borderBottomWidth: 1.5, borderBottomColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={this._loadFriendSelector.bind(this)}>
              <Text style={{textAlign: 'center'}}>Arr! Sing like a pirate, matey!</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={this._loadFriendSelector.bind(this)}>
              <Text style={{textAlign: 'center'}}>Rock on, like a rockstar!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}
