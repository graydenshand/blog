import React, {Component} from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import Auth from '../utilities/Auth';
import Loading from './Loading';

class Editor extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: "",
      ready: false,
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

    this.login_redirect = this.login_redirect.bind(this);
  }
  
  handleChange(value){
    this.setState({text: value});
  }

  submit(value){
    var state = this.state.text;
    console.log(state);
  }

  login_redirect(result) {
    if (result != true) {
      window.location.href = '/login?redirect=/editor'
    } else {
      this.setState({"ready": true})
    }
  } 

  componentDidMount(){
    var x = new Auth()
    x.login_required(x.get_token(), this.login_redirect)
  }


  render(){
    if (this.state.ready == false) {
      return <Loading />
    } else {
      return (
      <div class='col-sm-6 offset-sm-3'>
        <div>
        <ReactQuill value={this.state.text}
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange} />
        <br />
        <button className='btn' onClick={this.submit}>Publish</button>
        </div>
      </div>
      )
    }
  }
}

export default Editor;
