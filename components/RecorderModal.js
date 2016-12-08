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
						leftButtonTitle: 'Cancel',
            onLeftButtonPress: () => this.props.closeModal(),
					}}
					style={{flex: 1}}
					tintColor="white"
					barTintColor="#4ABDAC"
					titleTextColor="white"
			    />
			</Modal>
		);
	}
}
