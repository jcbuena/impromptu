import React from 'react';
import { View, Modal, Text, NavigatorIOS, Button} from 'react-native';
import Camera from 'react-native-camera';
import RecorderPreview from './RecorderPreview.js'

export default class Recorder extends React.Component {
	state ={
		recording: false
	}

	launchPreview(data) {
		this.setState({recording: false})

		this.props.navigator.push({
			component: RecorderPreview,
			passProps: {path: data.path},
			title: 'Preview'
		})
	}

	render() {
		return (<View style={{flex: 1, paddingTop: 64}}>
					<Camera
			          ref="camera"
			          style={{flex: 1}}
			          aspect={Camera.constants.Aspect.fill}>
					</Camera>
					<Button title={this.state.recording ? "recording": "blah"}
						onPress = { () => {
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
						}}/>
				</View>);
	}
}