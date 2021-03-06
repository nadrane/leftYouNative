import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry, onFocus}) => {
	const {inputStyle, labelStyle, containerStyle} = styles;
	return (
	<View style={containerStyle}>
	<Text style={labelStyle}>{label}</Text>
	<TextInput
		secureTextEntry={secureTextEntry}
		placeholder={placeholder}
		autoCorrect={false}
		style={inputStyle}
		value={value}
		onChangeText={onChangeText}
		onFocus={onFocus}/>
	</View>
	);
}

const styles = {
	inputStyle:{
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	//since the "label" and "input" divs are siblings, the "flex" attribute
	//lets us tell each what proportion of the line they take up. If we give "label" a 1
	//and "input" a 2, their total "flex" area is 3 and "label" gets 1/3 of that,
	//"input" gets 2/3.
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export {Input};