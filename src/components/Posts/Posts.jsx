import './posts.css'
import { useEffect, useState } from 'react'
import Post from '../Post/Post'
import axios from 'axios'



export default function Posts(){
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
			<ul className="posts">
				{posts.map(post=>{
                    return (
                        <Post key={post.id} 
                        thumbnail={post.thumbnail} 
                        category={post.category} 
                        title={post.title} 
                        profileImg={post.profileImg} 
                        created={post.created} 
                        userName={post.userName} 
                        contents={post.contents[0]['text']}/>
                        )
                })}
			</ul>

    )
}