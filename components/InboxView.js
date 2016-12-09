import React from 'react'
import {ListView, View, Text} from 'react-native'

import Thread from './Thread.js'
import CardScrollView from './CardScrollView.js'

export default class InboxView extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.data = [
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
      ]

    this.cards = {
      "Diego Hernandez": [
            {
        name: "Diego Hernandez",
        description: "is performing a rap duet!",
        comments: [
          {
            name: 'Qingping',
            comment: 'Wow I love the artistry in this rapping!'
          },
          {
            name: 'Diego',
            comment: 'Great! I LOVE THE ARTISTRY TOO!'
          }
        ],
        videoName: {
          path: "collabwithsiri"
        }
      },
      {
        name: "Diego Hernandez",
        description: "is playing the piano behind his back!",
        comments: [
          {
            name: 'Andrea',
            comment: 'Cool'
          },
          {
            name: 'Alex',
            comment: 'Damn I could never do that.'
          },
          {
            name: 'Andreas',
            comment: 'WOW'
          },
          {
            name: 'Ash',
            comment: 'Psh I could play piano with my toes.'
          },
        ],
        videoName: {
          path: "upsidedownpiano"
        }
      }],

      "Chen Luo": [
            {
        name: "Diego Hernandez",
        description: "is performing a rap duet!",
        comments: [
          {
            name: 'Qingping',
            comment: 'Wow I love the artistry in this rapping!'
          },
          {
            name: 'Diego',
            comment: 'Great! I LOVE THE ARTISTRY TOO!'
          }
        ],
        videoName: {
          path: "collabwithsiri"
        }
      },
      {
        name: "Diego Hernandez",
        description: "is playing the piano behind his back!",
        comments: [
          {
            name: 'Andrea',
            comment: 'Cool'
          },
          {
            name: 'Alex',
            comment: 'Damn I could never do that.'
          },
          {
            name: 'Andreas',
            comment: 'WOW'
          },
          {
            name: 'Ash',
            comment: 'Psh I could play piano with my toes.'
          },
        ],
        videoName: {
          path: "upsidedownpiano"
        }
      }],

      "Qingping He": [
            {
        name: "Diego Hernandez",
        description: "is performing a rap duet!",
        comments: [
          {
            name: 'Qingping',
            comment: 'Wow I love the artistry in this rapping!'
          },
          {
            name: 'Diego',
            comment: 'Great! I LOVE THE ARTISTRY TOO!'
          }
        ],
        videoName: {
          path: "collabwithsiri"
        }
      },
      {
        name: "Diego Hernandez",
        description: "is playing the piano behind his back!",
        comments: [
          {
            name: 'Andrea',
            comment: 'Cool'
          },
          {
            name: 'Alex',
            comment: 'Damn I could never do that.'
          },
          {
            name: 'Andreas',
            comment: 'WOW'
          },
          {
            name: 'Ash',
            comment: 'Psh I could play piano with my toes.'
          },
        ],
      }]
    }

    for (name in this.props.append.names) {
      this.cards[name].push(this.props.append.card)

      for (data in this.data) {
        if (data.name === name) {
          this.data.name += 1
        }
      }
    }

    this.state = {
      dataSource: ds.cloneWithRows(data)
    }
  }

  addComment(card, comment) {
    card.comments.push(comment)
  }

  _loadChallengeScreen(name) {
    this.props.navigator.push({
      component: CardScrollView,
      passProps: {
        cards: this.cards[name],
        bindAppendFunction: (appendFunc) => {
          this.appendFunc = appendFunc;
        },
        addComment: (rowID, comment) => this.addComment(this.cards[name][rowID], comment)
      },
      title: 'Challenge Journey With Diego',
      leftButtonTitle: '<',
      tintColor: 'white',
      onLeftButtonPress: () => this.props.navigator.pop(),
    })
  }

  _renderThreads(rowID, data) {
    return (
      <Thread
        name={data.name}
        pic={data.pic}
        msgCount={data.msgCount}
        timeStamp={data.timeStamp}
        showCards={() => this._loadChallengeScreen(data.name)}
      />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => this._renderThreads(rowID, rowData)}
        />
      </View>
    )
  }
}
