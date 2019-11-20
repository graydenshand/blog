import Auth from '../utilities/Auth';
import React, { Component } from 'react';
import Feed from './Feed';
import Loading from './Loading';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {"ready": false}
    this.login_redirect = this.login_redirect.bind(this)
  }


  login_redirect(result) {
    if (result != true) {
      window.location.href = '/login'
    } else {
      this.setState({"ready": true})
    }
  } 

  componentDidMount(){
    var x = new Auth()
    x.login_required(x.get_token(), this.login_redirect)
  }

  render() {
    if (this.state.ready == false) {
      return <Loading />
    } else {
      return (
          <Feed posts={this.props.posts} />
        )
    }
  }
}

export default Home;