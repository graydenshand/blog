import React, {Component} from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'



class Editor extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.modules = { toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ],
    };

 
    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]
  }
  
  handleChange(value){
    this.setState({text: value});
  }

  submit(value){
    var state = this.state.text;
    console.log(state);
  }



  render(){
    return <div>
      <ReactQuill value={this.state.text}
        modules={this.modules}
        formats={this.formats}
        onChange={this.handleChange} />
      <br />
      <button className='btn' onClick={this.submit}>Publish</button>
    </div>
  }
}

export default Editor;
