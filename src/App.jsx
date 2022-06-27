import React from 'react';
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Homepage from './pages/Homepage/Homepage';
import PostView from './pages/PostView/PostView';

function App() {
	return (
		<BrowserRouter>
		<GlobalStyle/>
		<Switch>
			<Route path='/' exact component={Homepage}/>
			<Route path='/post' exact component={PostView} />
		</Switch>
		</BrowserRouter>
	)
}

export default App;
