import Cookies from "js-cookie";

class Auth {
	get_token() {
		return Cookies.get("authToken");
	}

	get_user() {
		return Cookies.getJSON('user');
	}

	login_required(token, callback) {
		var r = new XMLHttpRequest();
	    r.open("POST", "http://localhost:5000/v1/validate_token");
	    let params = `token=${token}`
	    r.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded')
	    r.send(params);

	    r.onreadystatechange = () => {
	      if(r.readyState === XMLHttpRequest.DONE && r.status === 200) {
	         var result = JSON.parse(r.responseText).result
	         if(callback) callback(result);
	      }
	    }
	}

}

export default Auth;