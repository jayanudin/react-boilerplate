import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import Wrapper from './Wrapper';
import P from './P';


export default class MainFooter extends Component {
  	render() {
		return (
	    	<Wrapper className="text-center">
	    		<P>salt&copy;copyright 2017</P>
	    	</Wrapper>
		);
	}
}