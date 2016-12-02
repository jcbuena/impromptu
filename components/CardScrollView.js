import React from 'react';

import Card from './Card.js';
import {ScrollView, View} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class CardScrollView extends React.Component {
	render() {
		return (
				<ScrollView style={{backgroundColor:"#EEEEEE"}}>
					<Card 
					name="Diego Hernandez"
					description="is performing a song twice as fast!"
					videoSelected = {() => {
						  this.props.navigator.push({
						      component: CardScrollView,
						      title: 'Next'
						   })
					}} />
				</ScrollView>
			)
	}
}