import React from 'react';
import { View, Modal, Text, NavigatorIOS, Button} from 'react-native';
import VideoView from '../native/Video.js';

export default class RecorderPreview extends React.Component {
	state ={
		recording: false
	}

	render() {
		return (<View style={{flex: 1, paddingTop: 64}}>
					<VideoView
						style={{height:500, width:500}}
						
						paused={false}
					/>
				</View>);
	}
}
