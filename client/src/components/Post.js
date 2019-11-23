import React from 'react';


const Post = (props) => {

	return (
		<div>
			<div className="media">
			  <div className="media-body">
			    <h2 className="mt-0"><a href={`/p/${props.id}`}>{props.header}</a></h2>
			    <div dangerouslySetInnerHTML={{__html: props.body}}></div>
			  </div>
			</div>
			<br />
		</div>
	);
}

export default Post;