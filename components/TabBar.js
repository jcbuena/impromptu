'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const constants = styles.constants;
const { StyleSheet, TabBarIOS, Text, View, NavigatorIOS} = ReactNative;
var base64Icon = 'data:image/png;base64,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'

import Icon from 'react-native-vector-icons/Ionicons';

import CardScrollView from './CardScrollView.js'

export default class TabBarExample extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'Feed',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
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
              selectedTab: 'Inbox',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Inbox', this.state.notifCount)}
          <NavigatorIOS
        initialRoute={{
          component: CardScrollView,
          title: 'Inbox',
        }}
        style={{flex: 1}}
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
        style={{flex: 1}}
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
            style={{flex: 1}}
          />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
