import Auth from '../utilities/Auth';
import React, { Component } from 'react';
import Feed from './Feed';
import Loading from './Loading';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Feed posts={this.props.posts} />
      )
  }
}

export default Home;