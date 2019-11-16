import React from 'react';
import Post from './Post';

const Feed = (props) => {

	return (
	  <div>
        {props.posts.map ( (post, index) =>
          <Post 
            header={post.header}
            body={post.body}
            key={index}
          />
        )}
      </div>
	);
}

export default Feed;