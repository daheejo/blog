import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Category from '../Category/Category'
import Author from '../Author/Author'
import './post.css'


export default function Post(props) {
    return (
        <li key={props.id}>
          <Link to="/post" className='post'>
            <article>
              <img src={props.thumbnail} alt="" />
              <div class="contents-wrap">
                <Category category={props.category} />
                <h3>{props.title}</h3>
                <Author author={props.username}/>
                <p class="post-description">{props.contents}</p>
              </div>
            </article>
          </Link>
        </li>
    );
  }