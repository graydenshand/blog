import Post from './Post';
import React from 'react';
import {withRouter} from "react-router";
import Loading from './Loading'

class P extends React.Component {
	/* 
	Route-Component to fetch and render a single post
			* /p/:id
			* :id <- post_id of post to render
	*/
	constructor(props) {
		super(props);

		this.state = {
			ready: false,
			post: {},
		}

		this.loadPost = this.loadPost.bind(this);
	}

	componentDidMount() {
		this.loadPost();
	}

	loadPost() {
		var oReq = new XMLHttpRequest();
    oReq.open("GET", `http://localhost:5000/v1/p/${this.props.match.params.id}`);
    oReq.send();

    oReq.onreadystatechange = () => {
      if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          var post = JSON.parse(oReq.responseText).result;
          this.setState({'post':post, 'ready': true});
      }
    }
	}

	render(){
		if (this.state.ready == false ) {
			return <Loading />
		} else {
		  return (
		    <div className="col-sm-6 offset-sm-3">
		      <Post 
		      	id = {this.state.post.post_id}
		      	body={this.state.post.post_body} 
		      	header={this.state.post.post_title} 
		      />
		    </div>
		  );
		}
	}
}

export default withRouter(P);