import React from 'react';

import Card from './Card.js';
import {ScrollView, View, Dimensions, DeviceEventEmitter} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NativeMethodsMixin from 'NativeMethodsMixin'


export default class CardScrollView extends React.Component {
	constructor(props) {
 	   super(props);
 	   this.cards = []
 	   this.state = {
 	   	expanderHeight: 0
 	   }
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

	componentWillMount () {
    	DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
  	}

	keyboardWillShow (e) {
	    let newSize = Dimensions.get('window').height - e.endCoordinates.height
	    this.keyboardHeight = newSize
	    //this.setState({expanderHeight: e.endCoordinates.height})
	    this.tryScrollHeight()
	}

	scrollToElement(element) {
		NativeMethodsMixin.measureInWindow.call(element, (x, y, width, height)=>{
			this.inputBottom = y + height;
			this.tryScrollHeight();
		})
	}

	tryScrollHeight() {
		if (this.inputBottom && this.keyboardHeight) {
			console.log(this.inputBottom)
			console.log(this.keyboardHeight)
			console.log(this.scrollOffset)

			var scrollDelta = this.keyboardHeight - 20 - this.inputBottom
			console.log(scrollDelta)
			this.scrollView.scrollTo({y: this.scrollOffset - scrollDelta, animated: true})

			this.inputBottom = undefined
			this.keyboardHeight = undefined
		}
	}

	render() {
		return (
				<ScrollView style={{backgroundColor:"#EEEEEE"}} scrollEventThrottle={100} 
					ref = {(scrollView) => this.scrollView = scrollView}
				onScroll={(event)=>{
					this.scrollOffset = event.nativeEvent.contentOffset.y;

					var {height, width} = Dimensions.get('window');

					var top = 64
					var bottom = height - top

					for (index in this.cards) {
						var card = this.cards[index]

						NativeMethodsMixin.measureInWindow.call(card, this.getMeasureFunc(card, top, bottom))
					}
				}}
				>
					<Card 
						ref= {(card) => {
							this.cards.push(card)
						}}
						name="Diego Hernandez"
						description="is performing a song twice as fast!"
						scrollToElement={(element) => this.scrollToElement(element)}
						videoName="collabwithsiri"
					/>
					<Card 
						ref= {(card) => {
							this.cards.push(card)
						}}
						name="Diego Hernandez"
						description="is performing a song twice as fast!" 
						scrollToElement={(element) => this.scrollToElement(element)}
						videoName="upsidedownpiano"
					/>
				</ScrollView>
			)
	}
}