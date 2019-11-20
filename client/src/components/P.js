import Post from './Post';
import React from 'react';
import {useParams} from "react-router-dom";
function P(props) {
  let { id } = useParams();
  return (
    <div className="col-sm-6 offset-sm-3">
      <Post body={props.posts[id].body} header={props.posts[id].header} />
    </div>
  );
}
export default P;