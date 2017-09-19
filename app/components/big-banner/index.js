import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Wrapper from './styled.jumbotron';


export default class BigBanner extends Component {
  	render() {
		return (
		  	<Wrapper>
			    <h1>Hello, world!</h1>
			    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			    <p><Button bsStyle="primary">Learn more</Button></p>
		  	</Wrapper>
		);
	}
}