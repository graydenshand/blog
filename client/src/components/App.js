import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Post from './Post';
import Feed from './Feed';
import Editor from './Editor/Editor';
import Login from './Login';
import Auth from '../utilities/Auth';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      posts: []
    }
    this.flashMessage = this.flashMessage.bind(this);
    this.removeFlashedMessage = this.removeFlashedMessage.bind(this);
    this.loadPosts = this.loadPosts.bind(this);
  }

  flashMessage(message) {
    var current_messages = this.state.messages;
    current_messages.push(message)
    this.setState({messages: current_messages})
    window.setTimeout(() => {
      this.removeFlashedMessage(message)}, 1000)
  }

  removeFlashedMessage(message) {
    var i;
    var current_messages = this.state.messages;
    for (i=0; i < this.state.messages.length; i++) {
      if (this.state.messages[i] == message) {
        current_messages.pop(i);
        this.setState({messages: current_messages})
      }
    }
  }

  loadPosts() {
    var oReq = new XMLHttpRequest();
    var x = new Auth();
    oReq.open("GET", "http://localhost:5000/v1/p/?publishedOnly=True");
    oReq.setRequestHeader('X-Auth-Token', x.get_token())
    oReq.send();

    oReq.onreadystatechange = () => {
      if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
          var posts = JSON.parse(oReq.responseText).result;
          this.setState({'posts':posts});
          console.log('loaded posts')
      }
    }
  }

  componentDidMount() {
    this.loadPosts();
  }
  
  render() {
    return (
      <Router>
        <div className="App" id="app">
          <div class='row'>
            <div className='col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4 text-center' id='flashed-messages'>
              {this.state.messages.map((message, index) => 
                <div className="flashed-message">{message}</div>
              )}
            </div>
          </div>
          <div className='container'>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/p/:id">
              <div>
                <Navbar />
                <br />
                <div className="col-sm-6 offset-sm-3">
                  <Post 
                    posts={this.state.posts}
                    test="test!"
                  />
                </div>
              </div>
            </Route>
            <Route path="/editor">
              <Editor 
                flashMessage={this.flashMessage}
              />
            </Route>
            <Route path="/">
              <Feed 
              posts={this.state.posts}
              />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
