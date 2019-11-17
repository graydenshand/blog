import React, {Component} from 'react';


class LoginForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	  		"email": ""
	    };
	 }

	handleSubmit() {
		let email = document.querySelector('#email').value;
		let pw = document.querySelector('#pw').value;
		var r = new XMLHttpRequest();
	    r.open("POST", "http://localhost:5000/v1/login");
	    let params = `email=${email}&pw=${pw}`
	    r.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded')
	    r.send(params);

	    r.onreadystatechange = () => {
	      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
	          var resp = JSON.parse(r.responseText).result;
	          console.log(resp)
	          if (Object.keys(resp).includes("token")) {
	          	console.log('logged_in')
	          	// Set cookie
	          	window.location.href = "/"
	          }
	      }
	    }

	}

	render() {return (
		<div>
	      <form class="col-8 offset-2">
	      	<div class="form-group">
	       		<label>Email</label>
	       		<input type="text" class="form-control" id="email"/>
	        </div>
	        <div class="form-group">
	        	<label>Password</label>
	        	<input type="password" class="form-control" id="pw" />
	        </div>
	        <button class="btn btn-primary" type="button" onClick={this.handleSubmit} >Submit</button>
	      </form>
		</div>
	);}
}

export default LoginForm;