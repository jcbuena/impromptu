import React from 'react'
import {ListView, View, Text, Image, AlertIOS, TouchableOpacity} from 'react-native'

import Friend from './Friend.js'
import CardScrollView from './CardScrollView.js'

export default class FriendSelectorView extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: 'Chen Luo',
          pic: require('../img/chen-circle.gif')
        },
        {
          name: 'Diego Hernandez',
          pic: require('../img/diego-circle.gif')
        },
        {
          name: 'Qingping He',
          pic: require('../img/qingping_circle.png')
        },
      ])
    }
  }

  _renderThreads(data) {
    return (
      <Friend
        name={data.name}
        pic={data.pic}
      />
    )
  }

  _goToFeed(){
    this.props.navigator.push({
      component: CardScrollView,
      title: 'impromptu',
      tintColor: 'white',
    })
  }

  _sendToFriends() {
    AlertIOS.alert(
      'Challenge Sent!',
      () => this.props.navigator.pop()
    )
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'column', }}>
        <View style={{flex:4}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => this._renderThreads(rowData)}
          />
          {/*<View style={{flex:1, alignItems: 'center'}}>
            <TouchableOpacity onPress={this._sendToFriends.bind(this)}>
              <Image source={require('../img/send.png')} />
            </TouchableOpacity>
          </View>*/}
        </View>
      </View>
    )
  }
}
