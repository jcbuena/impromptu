'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, TabBarIOS, Text, View, NavigatorIOS} = ReactNative;

import Icon from 'react-native-vector-icons/Ionicons';

import CardScrollView from './CardScrollView.js'
import InboxView from './InboxView.js'

export default class TabBarExample extends Component {

  state = {
    selectedTab: 'Feed',
  };

  render() {
    return (
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
              title: 'Impromptu',
            }}
            style={{flex: 1, fontFamily: 'Oxygen'}}
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
                title: 'Inbox',
              }}
              style={{flex: 1, fontFamily: 'Oxygen'}}
              barTintColor='#F7B733'
              titleTextColor='white'
              backButtonIcon= 'Custom Back'
            />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Record"
          iconName="ios-videocam-outline"
          selectedIconName="ios-videocam"
          selected={this.state.selectedTab === 'Record'}
          onPress={() => {
            this.setState({
              selectedTab: 'Record',
            });
          }}>
          <NavigatorIOS
            initialRoute={{
              component: CardScrollView,
              title: 'Record',
            }}
            style={{flex: 1, fontFamily: 'Oxygen'}}
            barTintColor='#4ABDAC'
            titleTextColor='white'
          />
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
              component: CardScrollView,
              title: 'Send a Challenge',
            }}
            style={{flex: 1, fontFamily: 'Oxygen'}}
            barTintColor='#F7B733'
            titleTextColor='white'
          />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
