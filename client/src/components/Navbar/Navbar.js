import React from 'react';
//import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {
	if (props.display_nav != false ) {
		return (
			<div className='container' id='navbar'>
				<div className="row">
					<div className="col-sm-6 offset-sm-3">
						<p><a href="/">Grayden's Blog</a></p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 offset-sm-3">
						<ul className="d-flex flex-row justify-content-between">
							<li><a href="#">subscribe</a></li>
							<li><a href="#">archive</a></li>
							<li><a href="#">about me</a></li>
							<li><a href="#">get in touch</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className='container' id='navbar'>
				<div className="row">
					<div className="col-sm-6 offset-sm-3">
						<p><a href="/">Grayden's Blog</a></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;