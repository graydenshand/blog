import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Navbar from './Navbar';
import Post from './Post';
import Feed from './Feed';
import Editor from './Editor';
import Login from './Login';
import Home from './Home'
import P from './P';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    this.flashMessage = this.flashMessage.bind(this);
    this.removeFlashedMessage = this.removeFlashedMessage.bind(this);
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
  
  render() {
    return (
      <Router>
        <div className="App" id="app">
          <Navbar />
          <br />
          <div class='row'>
            <div className='col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4 text-center' id='flashed-messages'>
              {this.state.messages.map((message, index) => 
                <div className="bg-info flashed-message">{message}</div>
              )}
            </div>
          </div>
          <div className='container'>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/p/:id">
              <P posts={this.state.posts} />
            </Route>
            <Route path="/editor">
              <Editor 
                flashMessage={this.flashMessage}
              />
            </Route>
            <Route path="/">
              <Home 
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
