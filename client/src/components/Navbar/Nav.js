import React from 'react';
//import { Link } from "react-router-dom";
import './Navbar.css'

const Nav = (props) => {
	if (props.display_nav != false ) {
		return (
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<ul className="d-flex flex-row justify-content-around">
						<li><a href="#">subscribe</a></li>
						<li><a href="#">archive</a></li>
						<li><a href="#">get in touch</a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Nav;