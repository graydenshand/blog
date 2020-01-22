import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';


class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ''
		}
		this.timeout = 'test';
	}
	
	componentDidMount() {
		this.timeout = setTimeout(() => {
			alert("Error: request timeout")
		}, 5000)
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	render() {
		return (
			<div>
				<Navbar display_nav={false}/>
				<div className='row'>
					<div className="loader offset-5"></div> 
				</div>
			</div>
		)
	}
}

export default Loading;