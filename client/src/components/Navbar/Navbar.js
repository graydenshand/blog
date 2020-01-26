import React from 'react';
//import { Link } from "react-router-dom";
import './Navbar.css'
import Nav from './Nav';

const Navbar = (props) => {
	return (
		<div className='container' id='navbar'>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<p><a href="/">Grayden's Blog</a></p>
				</div>
			</div>
			{props.display_nav == false ? '' : <Nav />}
		</div>
	)
}

export default Navbar;