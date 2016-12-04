import React from 'react';
import { View, Modal, Text, NavigatorIOS} from 'react-native';
import Recorder from './Recorder.js';

export class RecorderModal extends React.Component {
	render() {
		return (
			<Modal
				animationType={"slide"}
        		transparent={false}
				visible = {this.props.visible}
				>
				<View/>
				<NavigatorIOS
					initialRoute={{
						component: Recorder,
						title: 'Record',
						leftButtonSystemIcon: 'cancel',
              			onLeftButtonPress: () => this.props.closeModal(),
					}}
					style={{flex: 1}}
			    />
			</Modal>
		);
	}
}