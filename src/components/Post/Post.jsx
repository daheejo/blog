import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Category from '../Category/Category'
import Author from '../Author/Author'
import './post.css'


export default function Post(props) {
    // const [posts, setPosts] = useState([])

    // const url = 'https://daheejo.github.io/blog/public/data.json'

    // useEffect(()=>{
    //     axios
    //         .get(url)
    //         .then(
    //             response => {
    //             console.log(...response.data.posts)
    //             setPosts(...response.data.posts)
    //             }
    //         )
    //     }
    // ,[])

    return (
      <>
            <li key={props.id}>
              <Link to="/post" className='post'>
                <article>
                  <img src={props.thumbnail} alt="" />
                  <div class="contents-wrap">
                    <Category category={props.category} />
                    <h3>{props.title}</h3>
                    <Author />
                    <p class="post-description">{props.contents}</p>
                  </div>
                </article>
              </Link>
            </li>
      </>
    );
  }