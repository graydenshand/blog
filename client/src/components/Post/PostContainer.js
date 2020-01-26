import React, {Component}from 'react';
import {withRouter} from "react-router";
import Moment from "react-moment";
import Loading from '../Loading';
import Post from './Post';
import Navbar from'../Navbar/Navbar';
import './Post.css';

class PostContainer extends Component {

	constructor(props) {
		super(props);
	}

	selectPost(post_id) {
		let post_to_return = null;
		this.props.posts.forEach((post) => {
			if (post_id == post.post_id) {
				post_to_return = post;
			};
		}) 
		return post_to_return
	}


	render() {
		return (
			<div>
		        <Navbar />
		        <br />
		        <div className="col-sm-6 offset-sm-3">
		          <Post 
		            post={this.selectPost(this.props.match.params.id)}
		            posts = {this.props.posts}
		          />
		        </div>
		    </div>
		)
	}
}



export default withRouter(PostContainer);