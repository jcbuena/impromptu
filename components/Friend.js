import React from 'react'
import {ListView, View, Text, TouchableOpacity, Image} from 'react-native'

export default class Friend extends React.Component {
  constructor(props) {
    super(props)
    this.selected = require('../img/select.png')
    this.unselected = require('../img/unselect.png')
    this.send = require('../img/send.png')

    this.state = {
      selected: false
    }
  }



  render() {
    return (
      <TouchableOpacity onPress={() => this.setState({selected: !this.state.selected})}>
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
            <Image source={this.state.selected ? this.selected : this.unselected} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
