import React from 'react'
import {ListView, View, Text, TouchableHighlight, Image} from 'react-native'

export default class Thread extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const status = this.props.msgCount ?
    (
      <View style={{
              flex: -1,
              width: 30,
              height: 30,
              borderRadius: 10,
              backgroundColor: '#FC4A1A',
              alignItems: 'center'
      }}>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 6}}>{this.props.msgCount}</Text>
      </View>
    ) :
    (
      <Text style={{color: 'grey'}}>{this.props.timeStamp}</Text>
    )
    return (
      <TouchableHighlight onPress={null}>
        <View style={{flex: 1,
                      flexDirection: 'row',
                      paddingVertical: 15,
                      paddingLeft: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: 'lightgrey'}}>
          <Image source={this.props.pic} style={{width: 45, height: 45}}/>
          <View style={{flex:1,
                        flexDirection: 'row',
                        marginLeft: 15,
                        marginRight: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between'
          }}>
            <Text>{this.props.name}</Text>
            {status}
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
