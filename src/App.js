import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
				</Switch>
			</Router>
		);
	}
}
export default App;
