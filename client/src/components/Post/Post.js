import React, {Component}from 'react';
import {withRouter} from "react-router";
import Moment from "react-moment";
import Loading from '../Loading';
import './Post.css';

class Post extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="media post">
				  <div className="media-body">
				    <h1 className="mt-0 post-title"><a href={`/p/${this.props.post ? this.props.post.post_id : ''}`}>{this.props.post ? this.props.post.post_title : ''}</a></h1>
				    <Moment fromNow>{this.props.post ? this.props.post.post_created_at : ''}</Moment>
				    <div dangerouslySetInnerHTML={this.props.post ? {__html: this.props.post.post_body} : {__html: ''}} className="post-body"></div>
				  </div>
				</div>
				<br />
			</div>
		);
	}
}



export default withRouter(Post);