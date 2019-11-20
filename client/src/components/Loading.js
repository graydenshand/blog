import React, { Component } from 'react';


class Loading extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ''
		}
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