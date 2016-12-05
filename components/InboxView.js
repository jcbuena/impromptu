import React from 'react'
import {ListView, View, Text} from 'react-native'

import Thread from './Thread.js'
import ChallengeView from './ChallengeView.js'

export default class InboxView extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: 'Diego Hernandez',
          pic: require('../img/diego-circle.gif'),
          msgCount: 3,
          timeStamp: '4:25pm'
        },
        {
          name: 'Chen Luo',
          pic: require('../img/chen-circle.gif'),
          msgCount: 0,
          timeStamp: '5:00pm'
        },
        {
          name: 'Qingping He',
          pic: require('../img/qingping_circle.png'),
          msgCount: 0,
          timeStamp: '12/1/16'
        },
      ])
    }
  }

  _loadChallengeScreen() {
    this.props.navigator.push({
      component: ChallengeView,
      title: 'Challenge Journey With Diego',
      leftButtonTitle: '<',
      tintColor: 'white',
      onLeftButtonPress: () => this.props.navigator.pop(),
    })
  }

  _renderThreads(data) {
    return (
      <Thread
        name={data.name}
        pic={data.pic}
        msgCount={data.msgCount}
        timeStamp={data.timeStamp}
        showCards={this._loadChallengeScreen.bind(this)}
      />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => this._renderThreads(rowData)}
        />
      </View>
    )
  }
}
