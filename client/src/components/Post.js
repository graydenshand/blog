import React, {Component}from 'react';
import {withRouter} from "react-router";
import Moment from "react-moment";

class Post extends Component {

	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			post_id:this.props.post_id,
			post_body:this.props.post_body,
			post_title:this.props.post_title,
			post_created_at:this.props.post_created_at,
			posts: []
		};
		this.selectPost = this.selectPost.bind(this);
	}

	selectPost(post_id) {
		//console.log(this.props.posts)
		let post_to_return = null;
		this.props.posts.forEach((post) => {
			if (post_id == post.post_id) {
				post_to_return = post;
			};
		}) 
		return post_to_return
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const post_id = this.props.match.params.id
		if (post_id != this.state.post_id) {
			const post = this.selectPost(post_id)
			if (post) {
				console.log("post found")
				this.setState({post_id:post.post_id, post_title:post.post_title, post_body:post.post_body, post_created_at:post.post_created_at})
			}
		}
	}

	render() {
		return (
			<div>
				<div className="media post">
				  <div className="media-body">
				    <h1 className="mt-0"><a href={`/p/${this.state.post_id}`}>{this.state.post_title}</a></h1>
				    <Moment className="lead text-muted" fromNow>{this.state.post_created_at}</Moment>
				    <div dangerouslySetInnerHTML={{__html: this.state.post_body}} className="post-body"></div>
				  </div>
				</div>
				<br />
			</div>
		);
	}
}



export default withRouter(Post);