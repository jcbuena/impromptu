import React from 'react';
import { View, Modal, Text, NavigatorIOS, Image, Button, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';
import RecorderPreview from './RecorderPreview.js'

export default class Recorder extends React.Component {
  constructor(props) {
	    super(props)
		this.challenges = ["Perform a song twice as fast", "Perform as if you're underwater"]

		this.state ={
			recording: false,
			prompt: this.challenges[0],
			nextIndex: 1
		}
	}

	refreshPrompt() {
		console.log(this.state)
		var ni = this.state.nextIndex

		this.setState({
			prompt: this.challenges[ni],
			nextIndex: (ni + 1) % this.challenges.length,
		})
	}

	launchPreview(data) {
		this.setState({recording: false})

		this.props.navigator.push({
			component: RecorderPreview,
			passProps: {path: data.path},
			title: 'Preview'
		})
	}

	triggerRecording() {
		this.launchPreview("lol")
		return;

		if (!this.state.recording) {
			this.refs.camera.capture({
				audio: true,
				target: Camera.constants.CaptureTarget.disk,
				mode: Camera.constants.CaptureMode.video})
				.then(this.launchPreview.bind(this))
				.catch(err => console.error(err));

			this.setState({recording: true})

		} else {
			this.refs.camera.stopCapture();
		}
	}

	render() {
		return (<View style={{flex: 1, paddingTop: 64, flexDirection: 'column'}}>
					<Camera
			          ref="camera"
			          style={{flex: 1, alignItems: 'center'}}
			          aspect={Camera.constants.Aspect.fill}>
			          <View style={{height:85, 
			          	alignSelf: 'stretch',
			          	backgroundColor:"#0000004D",
			          	flexDirection: 'row',
			          	justifyContent: 'space-between',
			          	alignItems:'center'
			          }}>
			          	<View style={{width:50}}/>
			          	<Text style={{color:"#FFFFFF"}}>{this.state.prompt}</Text>
    					<TouchableHighlight onPress={this.refreshPrompt.bind(this)}>
				          	<Image
				          	source={require("../img/repeat.png")}
				          	resizeMode={"contain"}
				          	 style={{width:20, height:20, marginRight:20}}/>
				        </TouchableHighlight>
			          </View>
			          <View style={{flex:1}}/>

			           <TouchableHighlight onPress={this.triggerRecording.bind(this)}>
				          	<Image
				          	source={this.state.recording ? require("../img/record-button-recording.png"): require("../img/record-button.png")}
				          	resizeMode={"contain"}
				          	 style={{width:70, height:70, marginBottom:40}}/>
				        </TouchableHighlight>
					</Camera>
				</View>);
	}
}