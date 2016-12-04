import React from 'react'
import {ListView, View, Text, TouchableHighlight, Image} from 'react-native'

export default class Thread extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const status = this.props.msgCount ? this.props.msgCount : this.props.timeStamp
    return (
      <TouchableHighlight onPress={null}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={this.props.pic} style={{width: 45, height: 45}}/>
          <Text>{this.props.name}</Text>
          <Text>{status}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
