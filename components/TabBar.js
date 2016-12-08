'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, TabBarIOS, Text, View, NavigatorIOS, AlertIOS} = ReactNative;

import Icon from 'react-native-vector-icons/Ionicons';

import SendChallengeView from './SendChallengeView.js'
import InboxView from './InboxView.js'
import ChallengeView from './ChallengeView.js'
import CardScrollView from './CardScrollView.js'
import {RecorderModal} from './RecorderModal.js';

import TimerMixin from 'react-timer-mixin';


export default class TabBarExample extends Component {

  state = {
    selectedTab: 'Feed',
    recorderVisible: false,
  };

    componentWillUnmount () {
      TimerMixin.componentWillUnmount.call(this);
    }

  closeModal() {
            this.setState({recorderVisible: false})
                TimerMixin.setTimeout.call(this, () => {
      console.log("in timeout")
      AlertIOS.alert('impromptu', 'Your video has been saved to the camera roll')
    }, 575);
          }

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
              this.setState({
                selectedTab: 'Feed',
              });
            }}>
            <NavigatorIOS
              initialRoute={{
                component: CardScrollView,
                title: 'impromptu',
              }}
              style={{flex: 1}}
              barTintColor='#FC4A1A'
              titleTextColor='white'
            />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Inbox"
            iconName="ios-mail-outline"
            selectedIconName="ios-mail"
            selected={this.state.selectedTab === 'Inbox'}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            onPress={() => {
              this.setState({
                selectedTab: 'Inbox'
              });
            }}>
            <NavigatorIOS
              initialRoute={{
                component: InboxView,
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
              this.setState({
                selectedTab: 'Send Challenge',
              });
            }}>
            <NavigatorIOS
              initialRoute={{
                component: SendChallengeView,
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
      </View>
    );
  }
}
