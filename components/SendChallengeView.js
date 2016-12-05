import React from 'react'
import {View, Text, TextInput, ScrollView, Button} from 'react-native'

export default class SendChallengeView extends React.Component {
  super(props) {

  }

  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#EEEEEE'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'}}>
            <TextInput
              style={{
                height: 70,
                width: 300,
                paddingLeft: 15
              }}
              placeholder='Type your challenge here...'
            />
            <Button title='Send' />
        </View>
      </ScrollView>
    )
  }
}
