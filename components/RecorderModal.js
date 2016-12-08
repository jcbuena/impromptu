import React from 'react';
import { View, Modal, Text, NavigatorIOS, AlertIOS} from 'react-native';
import Recorder from './Recorder.js';

export class RecorderModal extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (this.props.visible && !nextProps.visible) {
			
		}
	}

	render() {
		return (
			<Modal
				animationType={"slide"}
        		transparent={false}
				visible = {this.props.visible}
				>
				<NavigatorIOS
					ref="navigator"
					initialRoute={{
						component: Recorder,
						title: 'Record',
						passProps: {
							closeModal: this.props.closeModal.bind(this)
						},
						leftButtonTitle: 'Cancel',
		            	onLeftButtonPress: this.props.closeModal.bind(this),
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
