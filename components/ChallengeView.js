import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native'

import ChallengeCard from './ChallengeCard'

export default class ChallengeView extends Component {
  super(props) {

  }

  render() {
    const camera = require('../img/camera.jpg')
    return (
      <ScrollView
        style={{backgroundColor:"#EEEEEE", flex: 1}}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}>
        <ChallengeCard
          name="Diego sent you a Video!"
          description="Perform a song twice as fast"
          pic={camera}
        />
        <ChallengeCard
          name="You sent Diego a Video!"
          description="Play like a pirate"
          pic={camera}
        />

      </ScrollView>
    )
  }
}
