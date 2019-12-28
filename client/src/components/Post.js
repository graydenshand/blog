import React from 'react';


const Post = (props) => {

	return (
		<div>
			<div className="media post">
			  <div className="media-body">
			    <h1 className="mt-0"><a href={`/p/${props.id}`}>{props.header}</a></h1>
			    <div dangerouslySetInnerHTML={{__html: props.body}} className="post-body"></div>
			  </div>
			</div>
			<br />
		</div>
	);
}

export default Post;