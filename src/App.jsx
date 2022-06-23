import React from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Homepage from './pages/Homepage/Homepage';

function App() {
	return (
		<BrowserRouter>
		<GlobalStyle/>
		<Homepage />
		</BrowserRouter>
	)
}

export default App;
