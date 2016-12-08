import React from 'react';
import { View, Modal, Text, Dimensions, NavigatorIOS, Image, Button, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
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
			passProps: {path: data.path,
				closeModal: this.props.closeModal},
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
		var windowWidth = Dimensions.get('window').width

		console.log(this.state)
		return (<View style={{
			flex: 1, 
			paddingTop: 64, 
			flexDirection: 'column', 
		}}>
					<Camera
			          ref="camera"
			          style={{flex: 1, alignItems: 'center'}}
			          aspect={Camera.constants.Aspect.fill} />
					<View style={{
						position: "absolute",
						width:windowWidth,
						height:85 + 64,
						top:0,
						left:0, 
			          	backgroundColor:"#0000004D",
			          	flexDirection: 'row',
			          	justifyContent: 'space-between',
			          	alignItems:'center',
			          }}>
			          		<View style={{
			          			width:50, 
			          			height:50, 
			          			backgroundColor:"#00000000",
			          			marginTop:60}}/>
			          		<Text style={{color:"#FFFFFF", marginTop:60}}>{this.state.prompt}</Text>
	    					<TouchableWithoutFeedback onPress={() => {
		    						var ni = this.state.nextIndex

									this.setState({
										prompt: this.challenges[ni],
										nextIndex: (ni + 1) % this.challenges.length,
									})
		    					}}>
					          	<Image
						          	source={require("../img/repeat.png")}
						          	resizeMode={"contain"}
						          	 style={{width:20, height:20, marginRight:20, marginTop:60}}/>
					        </TouchableWithoutFeedback>
			        </View>
					<TouchableHighlight onPress={this.triggerRecording.bind(this)}>
			          	<Image
			          	source={this.state.recording ? require("../img/record-button-recording.png"): require("../img/record-button.png")}
			          	resizeMode={"contain"}
			          	 style={{width: windowWidth, height:70, marginBottom:40, marginTop:-110}}/>
			        </TouchableHighlight>
				</View>);
	}
}