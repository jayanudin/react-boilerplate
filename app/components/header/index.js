import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
//import { AutoAffix } from 'react-overlays';
import MainNav from './navigation';

export default class MainHeader extends Component {
  	render() {
		return (
			<header> 
			    <Navbar inverse collapseOnSelect fixedTop={true}>

			    	{/* MAIN LOGO */}
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header> 

				    {/* MAIN NAVIGATION */}
					<MainNav />

				</Navbar>
		    </header>
		);
	}
}

//export default MainHeader;