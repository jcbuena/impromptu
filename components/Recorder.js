import React from 'react';
import { View, Modal, Text, Dimensions, NavigatorIOS, Image, Button, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';
import RecorderPreview from './RecorderPreview.js'

export default class Recorder extends React.Component {
  constructor(props) {
	    super(props)
		this.challenges = [{
			name: "Perform a song twice as fast",
			description: "is performing a song twice as fast",
		},{
			name:"Perform as if you're underwater",
			description: "is performing as if he was underwater"
		}]

		this.state ={
			recording: false,
			prompt: this.challenges[0],
			nextIndex: 1,
			cameraType: Camera.constants.Type.front
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
			passProps: {
				prompt: this.state.prompt,
				path: data.path,
				closeModal: this.props.closeModal},
			title: 'Preview'
		})
	}

	triggerRecording() {
		if (!this.state.recording) {
			this.refs.camera.capture({
				audio: true,
				type: this.state.cameraType,
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
			          type={this.state.cameraType}
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
			          		<View style={{marginTop:64, alignItems: 'center'}}>
			          			<Text style={{color:"#FFFFFF", marginTop:10}}>Your Challenge</Text>

			          			<Text style={{color:"#FFFFFF", marginTop:20}}>{this.state.prompt.name}</Text>
	    					</View>
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
			        <View style={{
		          		backgroundColor: "#00000000",
		          		width: windowWidth, 
		          		height:70, 
		          		marginBottom:40, 
		          		marginTop:-110,
		          		flexDirection:"row",
		          		justifyContent: 'space-between',
					}}>
						<View style={{width:55, height:70}}/>
						<TouchableWithoutFeedback onPress={this.triggerRecording.bind(this)}>
				          	<Image 
				          	source={this.state.recording ? require("../img/record-button-recording.png"): require("../img/record-button.png")}
				          	resizeMode={"contain"}
				          	 style={{flex:1, height:70}}/>
				        </TouchableWithoutFeedback>
				        <TouchableWithoutFeedback onPress={ () => {
				        	if (this.state.cameraType === Camera.constants.Type.front) {
				        		this.setState({cameraType: Camera.constants.Type.back})
				        	} else {
				        		this.setState({cameraType: Camera.constants.Type.front})
				        	}
				        }}>
				          	<Image 
					          	source={require("../img/flip.png")}
					          	resizeMode={"contain"}
					          	 style={{
					          	 	top:15,
					          	 	right:15,
					          	 	width:40, 
					          	 	height:40, 
					          	 	backgroundColor:"#FFFFFF88",
					          	 	borderRadius: 20
					        }}/>
				        </TouchableWithoutFeedback>
				    </View>
				</View>);
	}
}