import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common';
import axios from 'axios';

class ViewPayload extends Component {

	constructor(props) {
		super(props);
	}

	renderPayloadView() {
		switch (this.props.selectedEgg.payloadType) {
			// conditional render for different payloads
			case 'Text':
				return (<Text> { this.props.selectedEgg.payload } </Text>)
			default:
				return (<Text> Something has GONE WRONG </Text>)
		}
	}

	render() {

		return (
			<Card>
				<CardSection style={{flex: 1}}>
					<Text style={{fontSize: 55, paddingTop: 50}}> Here's your message! </Text>
				</CardSection>
				<CardSection>
					{ this.renderPayloadView() }
				</CardSection>
			</Card>
		);
	};
}

const mapStateToProps = (state, ownProps) => {
	const selectedEgg = state.eggs.selectedEgg;
    return { selectedEgg };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPayload);