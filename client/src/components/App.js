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

  constructor(props) {
    super(props);
    this.load_posts = this.load_posts.bind(this)
    this.load_posts()
  }

  load_posts() {
    function reqListener () {
      //var state = JSON.parse(this.responseText).result;
      //console.log(state);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://localhost:5000/v1/p/");
    oReq.send();
  }
  
  render() {
    return (
      <Router>
        <div className="App" id="app">
          <Navbar />
          <br />
          <div className='container'>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/p/:id">
              <P posts={this.state.posts} />
            </Route>
            <Route path="/edit">
              <Edit />
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


function Home(props) {
  return (
    <div class="col-sm-6 offset-sm-3">
      <Feed posts={props.posts} />
    </div>
    )
}

function About() {
  return <h2>About</h2>;
}

function Edit() {
  return (
    <div class='col-sm-7 offset-sm-3'>
      <Editor />
    </div>
  );
}

function P(props) {
  let { id } = useParams();
  console.log(id);
  let { posts } = props.posts;
  console.log()
  return (
    <div class="col-sm-6 offset-sm-3">
      <Post body={props.posts[id].body} header={props.posts[id].header} />
    </div>
  );
}

export default App;
