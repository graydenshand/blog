import React, { Component } from 'react';
import Post from './Post/Post';
import Auth from '../utilities/Auth';
import Navbar from './Navbar/Navbar'

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
    oReq.open("GET", "http://127.0.0.1:5000/v1/p/?publishedOnly=True");
    oReq.setRequestHeader('X-Auth-Token', x.get_token())
    oReq.send();

    oReq.onreadystatechange = () => {
      if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          var posts = JSON.parse(oReq.responseText).result;
          this.setState({'posts':posts});
      }
    }
  }

	render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className='col-xs-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
      	  <div>
              {
                this.props.posts.map ( (post, index) =>
                <div>
                <Post 
                  posts={this.props.posts}
                  post={post}
                  key={post.post_id}
                />
                </div>
              )}
            </div>
        </div>
      </div>
	 )};
}



export default Feed;