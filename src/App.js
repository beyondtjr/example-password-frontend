import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import AuthService from './services'
import Register from './pages/Register'
import ProtectedExample from './pages/ProtectedExample'
import PublicExample from './pages/PublicExample'

class App extends Component {
	render() {
		// creates new instance of AuthService class
		let auth = new AuthService()
		return (
			<div>
				<Router>
					{(auth.loggedIn())
					// if logged in
					? <Switch>
						<Route path="/public" component={PublicExample} />
						<Route path="/protected" component={ProtectedExample} />
						<Route path="/register" component={Register} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" component={Login} />
						<Route path="/public" component={PublicExample} />
						<Redirect from="/protected" to="/register" />
						<Route path="/register" component={Register} />
					</Switch>}
				</Router>
			</div>
		);
	}
}

export default App;
