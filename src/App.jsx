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

	const [isLogin, setLogin] = useState(false)

    let handleLogin=()=>{
        isLogin? setLogin(false):setLogin(true)
    }

	return (
		<BrowserRouter>
		<GlobalStyle/>
		<Switch>

		<Route exact path='/blog'>
				<Homepage posts={posts} isLogin={isLogin} handleLogin={handleLogin}/>
			</Route>
			<Route path='/post/:id'>
				<PostView />
			</Route>
		</Switch>
		</BrowserRouter>
	)
}

export default App;
