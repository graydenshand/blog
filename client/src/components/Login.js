import React, {Component} from 'react';
import Cookies from "js-cookie";
import queryString from 'query-string';
import Navbar from './Navbar/Navbar';

class LoginForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	  		"email": ""
	    };
	    const parsed = queryString.parse(window.location.search);
		if (parsed != null & parsed.redirect != null) {
			this.redirect = parsed.redirect
		} else {
			this.redirect = '/'
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	 }

	handleSubmit() {
		let email = document.querySelector('#email').value;
		let pw = document.querySelector('#pw').value;
		var r = new XMLHttpRequest();
	    r.open("POST", "http://127.0.0.1:5000/v1/login");
	    let params = `email=${email}&pw=${pw}`
	    r.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded')
	    r.send(params);

	    r.onreadystatechange = () => {
	      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
	          var resp = JSON.parse(r.responseText).result;
	          console.log(resp)
	          if (Object.keys(resp).includes("token")) {
	          	console.log('logged_in')
	          	Cookies.set('authToken', resp.token, {expires: 30, path: '/'})
	          	Cookies.set('user', resp.user, {expires: 30, path: '/'});
	          	window.location.href = this.redirect;
	          } else if (Object.keys(resp).includes("error")){
	          	let container = document.querySelector("#error-container")
	          	container.innerHTML = '';
	          	let msg = document.createTextNode(resp.error);
	          	container.appendChild(msg);
	          }
	      }
	    }

	}

	render() {
		return (
		<div>
			<Navbar display_nav={false}/>
			<div class='col-sm-6 offset-sm-3'>
				<div>
				<div id="error-container" class="col-8 offset-2" style={{fontWeight: 700}}></div>
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
			</div>
		</div>
	);}
}

export default LoginForm;