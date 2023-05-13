import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Navbar'
import About from './pages/about';
import Teams from './pages/team';
import Register from './pages/register';
import Slogan from './section';


function App() {
return (
	<Router>
	<Navbar />
  <Slogan />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/team' component={Teams} />
		<Route path='/register' component={Register} />
	</Routes>
	</Router>
);
}

export default App;
