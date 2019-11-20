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

  state = {
    posts: [
      {
        header: 'Post0',
        body: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      },
      {
        header: 'Post1',
        body: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
      }
    ]
  };
  
  render() {
    return (
      <Router>
        <div className="App" id="app">
          <Navbar />
          <br />
          <div className='container'>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/p/:id">
              <P posts={this.state.posts} />
            </Route>
            <Route path="/p">
              <Feed />
            </Route>
            <Route path="/editor">
              <Editor />
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
