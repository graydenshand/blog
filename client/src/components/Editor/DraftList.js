import React, {Component} from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import Moment from "react-moment";
import DraftCard from "./DraftCard";

class DraftList extends Component{

  constructor(props){
    super(props);
    this.handleChangeSelected = this.handleChangeSelected.bind(this);
  }

  handleChangeSelected(value) {
    return this.props.select(value)
  } 

  componentDidMount(){
  }

  render(){
    return (
      this.props.posts.map((post, index) => 
        <DraftCard post={post} key={post.post_id} selected={this.props.selected==post.post_id} select={this.handleChangeSelected}/>
      )
    ) 
  }
}

export default DraftList;
