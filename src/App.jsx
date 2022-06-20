import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner'

function App() {
	return (
		<Router>
		<GlobalStyle/>
		<Header />
		<Banner />
		</Router>
	)
}

export default App;
