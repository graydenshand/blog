import React, { Component } from 'react';
import Post from './Post';
import Auth from '../utilities/Auth';

class Feed extends Component {
  /*
  Component to render a stream of posts

  */

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  loadPosts() {
    var oReq = new XMLHttpRequest();
    var x = new Auth();
    oReq.open("GET", "http://localhost:5000/v1/p/?publishedOnly=True");
    oReq.setRequestHeader('X-Auth-Token', x.get_token())
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
      <div className='col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
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