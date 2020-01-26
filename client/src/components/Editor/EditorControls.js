import React, {Component} from 'react';
import './Editor.css';
import SaveControl from './SaveControl';
import DeleteControl from './DeleteControl';
import PublishControl from './PublishControl';
import NewControl from './NewControl';

class EditorControls extends Component{

  constructor(props){
    super(props);
  }
  
  componentDidMount(){  
  }

  render(){
    return (
      <div className="editor-controls">
        <SaveControl width='50px' save={this.props.save} />
        <PublishControl width='50px' publish={this.props.publish} unPublish={this.props.unPublish} published={this.props.published} />
        <DeleteControl deletePost={this.props.deletePost} width='50px' />
        <NewControl newPost={this.props.newPost} width='50px' />
      </div>
    )
  }
}

export default EditorControls;
