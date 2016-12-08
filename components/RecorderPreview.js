import React from 'react';
import { View, Modal, Image, Text, AlertIOS, NavigatorIOS, Button, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import VideoView from '../native/Video.js';
import SelectableImageView from './SelectableImageView.js'
import FriendSelectorView from './FriendSelectorView.js'

import TimerMixin from 'react-timer-mixin';


const saveButtonImage = require("../img/save-button.png")
const saveButtonSelectedImage = require("../img/save-selected-button.png")

const feedButtonImage = require("../img/feed-button.png")
const feedButtonSelectedImage = require("../img/feed-selected-button.png")

const friendsButtonImage = require("../img/friends-post-button.png")
const friendsButtonSelectedImage = require("../img/friends-post-selected-button.png")


export default class RecorderPreview extends React.Component {

	state ={
		recording: false,
		saveButtonPressed: false,
		feedButtonPressed: false,
		friendsButtonPressed: false
	}

	saveToCameraRoll() {
		AlertIOS.alert('impromptu', 'Your video has been saved to the camera roll')
	}

	postToFriends() {
		this.props.navigator.popToTop()
		this.props.closeModal()
	}

	launchFriendSelector() {
		this.props.navigator.push({
			component: FriendSelectorView,
			rightButtonTitle: "Send",
			onRightButtonPress: () => this.postToFriends.bind(this),
			title: 'Select Friends'
		})
	}

	postToFeed() {

	}

	render() {
		return (<View style={{flex: 1, paddingTop: 64}}>
					<VideoView
						style={{flex: 1, alignItems: "center"}}
						path="collabwithsiri"
						paused={false}
					>
						<View style={{flex:1}}/>

						<TouchableWithoutFeedback
							onPress = {this.saveToCameraRoll.bind(this)}
							onPressIn = {()=> this.setState({saveButtonPressed: true})}
							onPressOut = {()=> this.setState({saveButtonPressed: false})}>
							<Image
								style= {{width:200, height:60, marginBottom:0}}
								resizeMode={"contain"}
								source={this.state.saveButtonPressed ?
									saveButtonSelectedImage: saveButtonImage}/>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback
							onPress = {this.postToFeed.bind(this)}
							onPressIn = {()=> this.setState({feedButtonPressed: true})}
							onPressOut = {()=> this.setState({feedButtonPressed: false})}>
							<Image
								style= {{width:200, height:60, marginBottom:0}}
								resizeMode={"contain"}
								source={this.state.feedButtonPressed ?
									feedButtonSelectedImage: feedButtonImage}/>
						</TouchableWithoutFeedback>

				        <Image
				        style={{width:40, height:30, marginTop:-7, marginBottom:-7}}
				        source={require("../img/or-dropshadow.png")}/>

				        <TouchableWithoutFeedback
				        	onPress = {this.postToFriends.bind(this)}
							onPressIn = {()=> this.setState({friendsButtonPressed: true})}
							onPressOut = {()=> this.setState({friendsButtonPressed: false})}>
							<Image
								style= {{width:200, height:60, marginBottom:20}}
								resizeMode={"contain"}
								source={this.state.friendsButtonPressed ?
									friendsButtonSelectedImage: friendsButtonImage}/>
						</TouchableWithoutFeedback>
      				</VideoView>
				</View>);
	}
}
