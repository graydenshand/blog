import React, { Component } from 'react';


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
			<div className='row'>
				<div className="loader offset-5"></div> 
			</div>
		)
	}
}

export default Loading;