import React from 'react'
import {View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native'

import FriendSelectorView from './FriendSelectorView.js'

export default class SendChallengeView extends React.Component {
  super(props) {

<<<<<<< HEAD
=======
    this.state = {
      chen: false,
      diego: false,
      johncarlo: false
    }
  }

  



  _toggleFriend(friend) {
    console.log('hello')
    if (friend === 'Chen Luo') {
      this.setState({chen: !this.state.chen});
    } else if (friend === 'Diego Hernandez') {
      this.setState({diego: !this.state.diego});
    } else if (friend === 'John Carlo Buenaflor') {
      this.setState({johncarlo: !this.state.johncarlo});
    }
    // this.setState({
    //   [friend]: !this.state[friend]
    // })
  }

  _sendToFriends() {
    if (this.state.chen || this.state.diego || this.state.johncarlo) {
      AlertIOS.alert(
        'Challenge Sent!',
        null,
        () => {
          this.props.navigator.pop()
          this.props.changeTab("Inbox")

          var names = []
          if (this.state.chen)
            names.push("Chen Luo")
          if (this.state.diego)
            names.push("Diego Hernandez")
          if (this.state.johncarlo)
            names.push("John Carlo Buenaflor")

        }
      )
    } else {
      AlertIOS.alert(
        'Error',
        'Please select at least one friend.'
      )
    }
>>>>>>> 0388085... finally fixed mute
  }

  _loadFriendSelector() {
    this.props.navigator.push({
      component: FriendSelectorView,
      passProps: {
        changeTab: this.props.changeTab
      },
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
              <Text style={{textAlign: 'center'}}>Perform like you are underwater</Text>
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
