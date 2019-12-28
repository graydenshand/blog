import React, {Component} from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {withRouter} from "react-router";
import Auth from '../utilities/Auth';
import Loading from './Loading';
import DraftList from './DraftList'

class Editor extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: "", // text of selected post
      ready: false, // loading controller -- spinning wheel until posts are loaded
      title: "", // title of selected post "Untitled" by default
      posts: null, // array of posts from db
      selected: null, // selected post_id
      selectedIndex: null, // position of selected post in post array
      new: true, // flag to control POST vs PUT requests
      published: null, // flag to control publish vs unpublish button
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.save = this.save.bind(this);
    this.publish = this.publish.bind(this);
    this.unPublish = this.unPublish.bind(this);
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
    this.loadPosts = this.loadPosts.bind(this);
    this.handleChangeSelected = this.handleChangeSelected.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.newPost = this.newPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }
  
  handleBodyChange(value){
    this.setState({text: value});
  }

  handleTitleChange(event) {
    this.setState({"title": event.target.value})
  }

  handleChangeSelected(post_id) {
    var i = 0;
    var selectedIndex = null;
    for (i=0; i<this.state.posts.length; i++) {
      if (this.state.posts[i].post_id == post_id) {
        selectedIndex = i;
        this.setState({selected: post_id, selectedIndex: i,'new': false})
      }
    }
    this.setState({text: this.state.posts[selectedIndex].post_body, title: this.state.posts[selectedIndex].post_title, published: this.state.posts[selectedIndex].post_published})
  }

  deletePost() {
    var r = new XMLHttpRequest();
    var x = new Auth();
    r.open("DELETE", `http://localhost:5000/v1/p/${this.state.selected}`);
    r.setRequestHeader('X-Auth-Token', x.get_token())
    r.send();
    var id_to_delete = this.state.selected
    var posts = this.state.posts;
    r.onreadystatechange = () => {
      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {        
        posts = posts.filter(function(post) {
          return post.post_id != id_to_delete;
        })
        this.setState({posts:posts, text:'', title:"Untitled", new:true})
      } 
    }
  }

  createPost() {
    var r = new XMLHttpRequest();
    var x = new Auth();
    r.open("POST", "http://localhost:5000/v1/p/");
    r.setRequestHeader('X-Auth-Token', x.get_token())
    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    if (this.state.title == "") {
      var title = 'Untitled'
    } else {
      var title = this.state.title
    }
    var params = `post_body=${this.state.text}&post_title=${title}`

    r.send(params);
    var posts = this.state.posts;
    r.onreadystatechange = () => {
      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
        var post = JSON.parse(r.responseText).result
        posts.unshift(post); // insert at index 0
        this.setState({"posts": posts, "selected": post.post_id, "selectedIndex": 0})
      }
    }
  }

  updatePost() {
    var r = new XMLHttpRequest();
    var x = new Auth();
    r.open("PUT", `http://localhost:5000/v1/p/${this.state.selected}`);
    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    r.setRequestHeader('X-Auth-Token', x.get_token())
    if (this.state.title == "") {
      var title = 'Untitled'
    } else {
      var title = this.state.title
    }
    var params = `post_body=${this.state.text}&post_title=${title}`

    r.send(params);
    var posts = this.state.posts;
    r.onreadystatechange = () => {
      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
        var resp_post = JSON.parse(r.responseText).result;
        posts.splice(this.state.selectedIndex, 1, resp_post)
        this.setState({posts: posts})
      }
    }
  }

  save(){
    if (this.state.new) {
      //console.log("Post request: new post");
      this.createPost()
      this.setState({'new': false});
    } else {
      //console.log("Put request: existing post")
      this.updatePost()
      this.props.flashMessage("Post saved")
    }
  }

  publish(value){ // save and publish post
    this.save(); // because it could be a new post
    var r = new XMLHttpRequest();
    var x = new Auth();
    r.open("PUT", `http://localhost:5000/v1/p/${this.state.selected}`);
    r.setRequestHeader('X-Auth-Token', x.get_token())
    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var params = `post_published=true`
    r.send(params);
    var posts = this.state.posts;
    r.onreadystatechange = () => {
      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
        var resp_post = JSON.parse(r.responseText).result;
        posts.splice(this.state.selectedIndex, 1, resp_post)
        this.setState({posts: posts, published: true})
      }
    }

    console.log(this.state.title, this.state.text);
  }

  unPublish(value){ 
  // un-publish a post and hide it from public view
    var r = new XMLHttpRequest();
    var x = new Auth();
    r.open("PUT", `http://localhost:5000/v1/p/${this.state.selected}`);
    r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    r.setRequestHeader('X-Auth-Token', x.get_token())
    var params = `post_published=false`
    r.send(params);
    console.log(params, this.state.selected)
    var posts = this.state.posts;
    r.onreadystatechange = () => {
      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
        var resp_post = JSON.parse(r.responseText).result;
        posts.splice(this.state.selectedIndex, 1, resp_post)
        this.setState({posts: posts, published:false})
      }
    }

    console.log(this.state.title, this.state.text);
  }

  login_redirect(result) {
    if (result != true) {
      window.location.href = '/login?redirect=/editor'
    } 
  } 

  loadPosts() {
    var oReq = new XMLHttpRequest();
    var x = new Auth();
    oReq.open("GET", "http://localhost:5000/v1/p/");
    oReq.setRequestHeader('X-Auth-Token', x.get_token())
    oReq.send();

    oReq.onreadystatechange = () => {
      if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          var posts = JSON.parse(oReq.responseText).result;
          console.log(posts);
          this.setState({'posts':posts, 'ready':true});
      }
    }
  }

  newPost() {
    this.setState({selected:null, text:"", title: "", new:true})  
  }

  componentDidMount(){
    var x = new Auth()
    x.login_required(x.get_token(), this.login_redirect)
    var posts = this.loadPosts()      
  }


  render(){
    if (this.state.ready == false) {
      return <Loading />
    } else {
      return (
        <div className="row">
          <div className="col-sm-3">
            <DraftList posts={this.state.posts} selected={this.state.selected} select={this.handleChangeSelected}/>
          </div>
          <div className='col-sm-6'>
              <div>
                <textarea id="title_input" value={this.state.title} onChange={this.handleTitleChange} className="form-control" rows="1" placeholder="Untitled" style={{border: "none", fontSize: 32, marginBottom: 5, lineHeight: "100%"}}/>
              </div>
              <div>
              <ReactQuill value={this.state.text}
                modules={this.modules}
                formats={this.formats}
                onChange={this.handleBodyChange} />
              <br />
              </div>
            </div>
          <div className="col-sm-3">
                <button className='btn btn-primary' onClick={this.save} style={{width: "100%", marginBottom: "1em", marginTop: '3em'}}>Save Draft</button>
                <button className='btn btn-warning' onClick={this.state.published ? this.unPublish : this.publish} style={{width: "100%", marginBottom: "1em"}}>{this.state.published ? "Unpublish" : "Publish"}</button>
                <button className='btn btn-danger' onClick={this.deletePost} style={{width: "100%", marginBottom: "1em"}}>Delete</button>
                <button className='btn btn-success' onClick={this.newPost} style={{width: "100%", marginBottom: "1em"}}>New</button>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Editor);
