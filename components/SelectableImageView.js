import React from 'react';
import {Image} from 'react-native';


export default class SelectableImageView extends React.Component {
	state = {
		pressed: false
	}

	render() {
		console.log(this.props)
		return (<Image 
				style= {{width:200, height:60, marginBottom:0}}
				resizeMode={"contain"}
				source={{uri: "../img/Avatar.png"}}/>)
	}
}