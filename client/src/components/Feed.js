import React, { Component } from 'react';
import Post from './Post';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  loadPosts() {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "http://localhost:5000/v1/p/");
    oReq.send();

    oReq.onreadystatechange = () => {
      if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          var posts = JSON.parse(oReq.responseText).result;
          this.setState({'posts':posts});
      }
    }
  }

  componentDidMount() {
    this.loadPosts()
  }

	render() {
    return (
      <div className='col-sm-6 offset-sm-3'>
    	  <div>
            {
              this.state.posts.map ( (post, index) =>
              <div>
              <Post 
                id={post.post_id}
                header={post.post_title}
                body={post.post_body}
                key={post.post_id}
              />
              </div>
            )}
          </div>
      </div>
	 )};
}



export default Feed;