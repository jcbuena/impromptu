'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, TabBarIOS, Text, View, NavigatorIOS, AlertIOS, Image, TouchableWithoutFeedback } = ReactNative;

import Icon from 'react-native-vector-icons/Ionicons';

import SendChallengeView from './SendChallengeView.js'
import InboxView from './InboxView.js'
import ChallengeView from './ChallengeView.js'
import CardScrollView from './CardScrollView.js'
import {RecorderModal} from './RecorderModal.js';

import TimerMixin from 'react-timer-mixin';


export default class TabBarExample extends Component {
<<<<<<< HEAD
  state = {
    selectedTab: 'Feed',
    recorderVisible: false,
    cards: [
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
=======
  constructor(props) {
    super(props)
    this.state = {
      muted: true,
      savedMuted: false,


      inboxMuted: false,
      inboxMuteButtonVisible: false,
      savedInboxMuted: false,

      selectedTab: 'Feed',
      recorderVisible: false,
      loginVisible: true,
      cards: [
        {
          name: "Diego Hernandez",
          description: "is performing a song twice as fast!",
          comments: [
            {
              name: 'Qingping',
              comment: 'Wow I love the artistry in this playing!'
            },
            {
              name: 'Diego',
              comment: 'Great! I LOVE THE ARTISTRY TOO!'
            }
          ],
          videoName: {
            path: "IMG_5933"
          }
        },
        {
          name: "Qingping He",
          description: "is rapping a song twice as slow!",
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
              comment: 'Psh I could do that.'
            },
          ],
          videoName: {
            path: "IMG_5930"
>>>>>>> d2eeea2... fukkking mute button finally works
          }
        ],
        videoName: {
          path: "collabwithsiri"
        }
<<<<<<< HEAD
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
      }
    ]
  };
=======
      ]
    };
  }

<<<<<<< HEAD
  componentDidUpdate() {
    console.log("updating component")

    if (!this.state.muted && 
      (this.state.selectedTab != "Feed" 
      || this.state.recorderVisible 
      || this.state.loginVisible)) {
      console.log("muting no feed")
      this.muteFunc(true)
      this.setState({
        muted: true,
        unmuteOnFeed: true})

      this.forceUpdate()
    } else if (this.state.unmuteOnFeed && 
      this.state.selectedTab === "Feed" &&
      !this.state.recorderVisible &&
      !this.state.loginVisible) {
      console.log("nooooooo")
      this.muteFunc(false)
      this.setState({muted:false,unmuteOnFeed: false})
      this.forceUpdate()
    }
  }
>>>>>>> d2eeea2... fukkking mute button finally works

=======
>>>>>>> 0388085... finally fixed mute
    componentWillUnmount () {
        this._mounted = false;

      TimerMixin.componentWillUnmount.call(this);
    }

    addComment(number, comment) {
      this.state.cards[number].comments.push(comment)
      this.setState({cards: this.state.cards})
    }

  closeModal(message, cardData, tab) {
    this.setState({
      recorderVisible: false
    })

    if (cardData) {
      this.setState({selectedTab: tab})

      if (tab === "Feed") {
        cardData.comments = []

        this.appendFunc(cardData)
      }

      //this.muteFunc(this.state.muted)
    }

    if (this.state.selectedTab === "Feed")
      this.setMuted(true, false)
    else if (this.state.selectedTab === "Inbox")
      this.setInboxMuted(true, false)
  }

  setMuted(isMuted, saveOrRestore) {
    if (saveOrRestore) {
      this.setState({muted: isMuted, savedMuted: this.state.muted})
      this.muteFunc(isMuted)
    } else {
      this.setState({muted: this.state.savedMuted})
      this.muteFunc(this.state.savedMuted)
    }

    this.forceUpdate()
  }

  setInboxMuted(isMuted, saveOrRestore) {
    if (saveOrRestore) {
      this.setState({inboxMuted: isMuted, savedInboxMuted: this.state.inboxMuted})

      if (this.inboxMuteFunc)
        this.inboxMuteFunc(isMuted)
    } else {
      this.setState({inboxMuted: this.state.savedInboxMuted})
      if (this.inboxMuteFunc)
        this.inboxMuteFunc(this.state.savedInboxMuted)
    }

        this.forceUpdate()

  }

<<<<<<< HEAD
=======
  _setLoginVisible(visible) {
    if (visible) {
          if (this.state.selectedTab === "Feed")

      this.setMuted(true, true)
        else if (this.state.selectedTab === "Inbox")

      this.setInboxMuted(true, true)
    }
    else {
                if (this.state.selectedTab === "Feed")

      this.setMuted(false, true)
            else if (this.state.selectedTab === "Inbox")

      this.setInboxMuted(false, true)
    }
   this.setState({loginVisible: visible});
  }

>>>>>>> 0388085... finally fixed mute
  render() {
    return (
      <View style={{flex:1}}>
        <TabBarIOS
          unselectedTintColor="black"
          tintColor="gray"
          barTintColor="white">
          <Icon.TabBarItemIOS
            title="Feed"
            iconName="ios-list-box-outline"
            selectedIconName="ios-list-box"
            selected={this.state.selectedTab === 'Feed'}
            onPress={() => {
              this.setMuted(false, false)
              this.setInboxMuted(true, true)
              this.setState({
                selectedTab: 'Feed',
              });
            }}>
            <NavigatorIOS
              initialRoute={{
                component: CardScrollView,
                title: 'impromptu',
<<<<<<< HEAD
=======
                leftButtonTitle: 'Logout',
                onLeftButtonPress: () => {
                  this.setState({
                    loginVisible: true
                  })

                  if (this.state.selectedTab === "Inbox")
                    this.setInboxMuted(true, true)
                  else if (this.state.selectedTab === "Feed")
                  this.setMuted(true, true)
                },
                tintColor: "white",
>>>>>>> d2eeea2... fukkking mute button finally works
                passProps: {
                  cards: this.state.cards,
                  bindAppendFunction: (appendFunc) => {
                    this.appendFunc = appendFunc;
                  },
                  bindMuteFunction: (muteFunc) => {
                    this.muteFunc = muteFunc;
                  },
                  addComment: this.addComment.bind(this)
                }
              }}
              style={{flex: 1}}
              barTintColor='#FC4A1A'
              titleTextColor='white'
              onLeftButtonPress=""
            />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Inbox"
            iconName="ios-mail-outline"
            selectedIconName="ios-mail"
            selected={this.state.selectedTab === 'Inbox'}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            onPress={() => {
              this.setMuted(true, true)
              this.setInboxMuted(true, false)

              this.setState({
                selectedTab: 'Inbox'
              });
            }}>
            <NavigatorIOS
              initialRoute={{
                component: InboxView,
                passProps: {
                  bindMuteFunction: (muteFunc) => {
                    this.inboxMuteFunc = muteFunc
                  },
                  setInboxMuteVisible: (visible) => {
                    if (!visible) {
                      this.setInboxMuted(true, true)
                    } else {
                      this.setInboxMuted(false, true)
                    }

                    TimerMixin.setTimeout.call(this, () => {
                      this.setState({inboxMuteButtonVisible: visible})
                    }, 75);
                  }
                },
                title: 'Inbox'
              }}
              style={{flex: 1}}
              barTintColor='#F7B733'
              titleTextColor='white'
            />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Record"
            iconName="ios-videocam-outline"
            selectedIconName="ios-videocam"
            selected={this.state.selectedTab === 'Record'}
            onPress={() => {
              if (this.state.selectedTab === "Feed")
              this.setMuted(true, true)
            else if (this.state.selectedTab === "Inbox")
              this.setInboxMuted(true, true)

              this.setState({
                //selectedTab: 'Record',
                recorderVisible: true
              });
            }}>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Send Challenge"
            iconName="ios-paper-plane-outline"
            selectedIconName="ios-paper-plane"
            selected={this.state.selectedTab === 'Send Challenge'}
            onPress={() => {
              this.setMuted(true, true)
                  this.setInboxMuted(true, true)

              this.setState({
                selectedTab: 'Send Challenge',
              });
            }}>
            <NavigatorIOS
              initialRoute={{
                component: SendChallengeView,
                passProps: {
                  changeTab: (tab) => this.setState({selectedTab: tab})
                },
                title: 'Send Challenge'
              }}
              style={{flex: 1}}
              barTintColor='#F7B733'
              titleTextColor='white'
            />
          </Icon.TabBarItemIOS>
        </TabBarIOS>
        {this.state.recorderVisible && (<RecorderModal
          visible={this.state.recorderVisible}
          closeModal={this.closeModal.bind(this)}
        />)}

        {this.state.selectedTab === "Feed" && 
        <TouchableWithoutFeedback  onPress={()=>{ 
          this.setMuted(!this.state.muted, true)
        }}>
          <Image 
            source={this.state.muted ? require("../img/mute.png"): require("../img/unmute.png")}
            resizeMode={"contain"}
            style={{
            position:"absolute",
            right:15, 
            top:32, 
            width:20, 
            height:20}}/>
        </TouchableWithoutFeedback >}

        {this.state.selectedTab === "Inbox" && this.state.inboxMuteButtonVisible && 
        <TouchableWithoutFeedback  onPress={()=>{ 
          this.setInboxMuted(!this.state.inboxMuted, true)
        }}>
          <Image 
            source={this.state.inboxMuted ? require("../img/mute.png"): require("../img/unmute.png")}
            resizeMode={"contain"}
            style={{
            position:"absolute",
            right:15, 
            top:32, 
            width:20, 
            height:20}}/>
        </TouchableWithoutFeedback >}
      </View>
    );
  }
}
