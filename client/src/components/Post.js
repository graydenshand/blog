import React from 'react';


const Post = (props) => {

	return (
		<div>
			<div className="media">
			  <div className="media-body">
			    <h2 className="mt-0">{props.header}</h2>
			    <p>{props.body}</p>
			  </div>
			</div>
			<br />
		</div>
	);
}

export default Post;