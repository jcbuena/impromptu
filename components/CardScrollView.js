import React from 'react';

import Card from './Card.js';
import {ScrollView, View, Dimensions} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NativeMethodsMixin from 'NativeMethodsMixin'


export default class CardScrollView extends React.Component {
	constructor(props) {
 	   super(props);
 	   this.cards = []

	}

	getMeasureFunc(card, top, bottom) {
		return (x, y, width, height) => {
			var t = y;
			var b = y + height;

			var c_t = Math.max(t, top)
			var c_b = Math.min(b, bottom)

			var percentIn = (c_b - c_t) * 1.0 / (bottom - top)

			if (percentIn > 0.5) {
				card.setState({playing:true})
			} else {
				card.setState({playing: false})
			}

		}
	}

	render() {
		return (
				<ScrollView style={{backgroundColor:"#EEEEEE"}} scrollEventThrottle={100} 
				onScroll={(event)=>{
					var {height, width} = Dimensions.get('window');

					var top = 64
					var bottom = height - top

					for (index in this.cards) {
						var card = this.cards[index]

						NativeMethodsMixin.measureInWindow.call(card, this.getMeasureFunc(card, top, bottom))

						/*if ((rect.top < top && rect.bottom > top) || 
							(rect.top > top && rect.bottom < bottom)) {
							card.setState({playing: true})
						} else {
							card.setState({playing: false})
						}

						console.log(rect)*/
					}
				}}
				>
					<Card 
					ref= {(card) => {
						this.cards.push(card)
					}}
					name="Diego Hernandez"
					description="is performing a song twice as fast!"
					/>
					<Card 
					ref= {(card) => {
						this.cards.push(card)
					}}
					name="Diego Hernandez"
					description="is performing a song twice as fast!" />
				</ScrollView>
			)
	}
}