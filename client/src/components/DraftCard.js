import React, {Component} from 'react';
import Moment from "react-moment";

class DraftCard extends Component{

  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(e, value) {
    e.preventDefault();
    return this.props.select(value)
  }

  render(){
    if (this.props.post.post_published == true) {
      return (
          <a className="draft-card-link" href="" onClick={(e) => this.handleSelect(e, this.props.post.post_id)}>
          <div className={this.props.selected ? "draft-card draft-card-selected" : "draft-card draft-card-published"}>
            <b>{this.props.post.post_title}</b>
            <p className="text-muted" style={{marginBottom: 0}}><Moment date={this.props.post.post_created_at} fromNow /></p>
          </div></a>
      )
    } else {
      return (
          <a className="draft-card-link" href="" onClick={(e) => this.handleSelect(e, this.props.post.post_id)}>
          <div className={this.props.selected ? "draft-card draft-card-selected" : "draft-card"}>
            <b>{this.props.post.post_title}</b>
            <p className="text-muted" style={{marginBottom: 0}}><Moment date={this.props.post.post_created_at} fromNow /></p>
          </div></a>
      )
    }
  }
}


export default DraftCard;
