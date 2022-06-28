import React,{useState, useEffect} from 'react';
import { BrowserRouter ,Route,Switch } from 'react-router-dom';
import axios from 'axios'

import GlobalStyle from './GlobalStyle'
import Homepage from './pages/Homepage/Homepage';
import PostView from './pages/PostView/PostView';

function App() {
	const [posts, setPosts] = useState([])

    const url = '/data.json'

    useEffect(()=>{
        axios
            .get(url)
            .then(
                response => {
                setPosts([...response.data.posts])
                }
            )
        }
    ,[])

	return (
		<BrowserRouter>
		<GlobalStyle/>
		<Switch>
			<Route path='/'>
				<Homepage posts={posts}/>
			</Route>
			<Route path='/post'>
				<PostView posts={posts}/>
			</Route>
		</Switch>
		</BrowserRouter>
	)
}

export default App;
