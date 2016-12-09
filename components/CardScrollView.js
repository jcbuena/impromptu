import React from 'react';

import Card from './Card.js';
import {ScrollView, View, ListView, Dimensions, DeviceEventEmitter} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NativeMethodsMixin from 'NativeMethodsMixin'


export default class CardScrollView extends React.Component {
	constructor(props) {
 	   super(props);

 	   this.cards = {}

 	   this.cardData = this.props.cards


 	   this.ds = new ListView.DataSource({rowHasChanged: () => true});
 	   this.state = {
 	   	muted: !this.props.beginPlay,
 	   	expanderHeight: 0,
 	   	dataSource: this.ds.cloneWithRows(this.cardData),
 	   }

 	   if (this.props.beginPlay) {
 	   		this.reupdate = true
 	   		this.forceUpdate()
 	   }
	}

	appendFunc(cardData) {
		this.cards = {}

		this.cardData.splice(0, 0, cardData)
		this.setState({
			dataSource: this.ds.cloneWithRows(this.cardData)
		})

		this.reupdate = true;
		this.forceUpdate();
	}

	muteFunc(isMuted) {
		this.setState({muted: isMuted, dataSource: this.ds.cloneWithRows(this.cardData)})
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
		this.props.bindAppendFunction(this.appendFunc.bind(this))
		this.props.bindMuteFunction(this.muteFunc.bind(this))
    	DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
  	}

  	componentDidUpdate() {
  		if (this.reupdate) {
	  		for (key in this.cards) {
				var card = this.cards[key]
				card.updateComments(this.cardData[key].comments)
			}
			this.forceUpdate()
			this.reupdate = false
		}
  	}

	keyboardWillShow (e) {
	    let newSize = Dimensions.get('window').height - e.endCoordinates.height
	    this.keyboardHeight = newSize
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
			var scrollDelta = this.keyboardHeight - 20 - this.inputBottom
			console.log(scrollDelta)
			this.scrollView.scrollTo({y: this.scrollOffset - scrollDelta, animated: true})

			this.inputBottom = undefined
			this.keyboardHeight = undefined
		}
	}

	render() {
		return (

				<ListView
					renderScrollComponent={props =>
				<ScrollView style={{backgroundColor:"#EEEEEE"}} scrollEventThrottle={100}
					ref = {(scrollView) => this.scrollView = scrollView}
				onScroll={(event)=>{

					this.scrollOffset = event.nativeEvent.contentOffset.y;

					var {height, width} = Dimensions.get('window');

					var top = 64
					var bottom = height - top

					for (key in this.cards) {
						var card = this.cards[key]

						NativeMethodsMixin.measureInWindow.call(card, this.getMeasureFunc(card, top, bottom))
					}
				}}
				/>}
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) => {return (<Card
						ref= {(card) => {
							this.cards[rowID] = card
						}}
						addComment={(comment) => this.props.addComment(rowID, comment)}
						name={rowData.name}
						description={rowData.description}
						comments={rowData.comments}
						scrollToElement={(element) => this.scrollToElement(element)}
						videoName={rowData.videoName}
						muted = {this.state.muted}
					/>)}}
          />
			)
	}
}
