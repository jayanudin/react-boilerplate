import React, { Component } from 'react';
import { NavDropdown, Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import {Link} from 'react-router';


export default class MainNav extends Component {
  	render() {
  		const {to, active} = this.props;
		return (
			<Navbar.Collapse>

			  {/* NAVIGATION */}
		      <Nav>
		      	
		        <li active={location.pathname == to}><Link to='/'>Home</Link></li>
		        <li active={location.pathname == to}><Link to='/feature'>Feature</Link></li>
		        <li active={location.pathname == to}><Link to='/post-featured'>Post Feature</Link></li>
		        <li active={location.pathname == to}><Link to='/data-thumbnail'>Data Thumbnails</Link></li>
		        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
		          <MenuItem eventKey={3.1}>Action</MenuItem>
		          <MenuItem eventKey={3.2}>Another action</MenuItem>
		          <MenuItem eventKey={3.3}>Something else here</MenuItem>
		          <MenuItem divider />
		          <MenuItem eventKey={3.3}>Separated link</MenuItem>
		        </NavDropdown>
		      </Nav>

		      {/* RIGHT NAVIGATION */}
		      <Nav pullRight>
		        <NavItem eventKey={1} href="#">Link Right</NavItem>
		        <NavItem eventKey={2} href="#">Link Right</NavItem>
		      </Nav>

		    </Navbar.Collapse>
		);
	}
}