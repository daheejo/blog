import './postView.css'
import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


// import Header from '../../components/Header/Header'
// import Banner from '../../components/Banner/Banner'
// import Footer from '../../components/Footer/Footer'
import View from '../../components/View/View'

export default function PostView(props){
    const { id } = useParams();
    const [post, setPost] = useState({})

    console.log("PostView id: ", id)
    const url = '/data.json'
    useEffect(()=>{
        console.log("useEffect inside");
        const getData = async () => {
            const response = await axios.get(url);
            return setPost(response.data.posts.filter(post => post.id === id)[0]);
        };
        getData();
        return;
    },[]);
    console.log(post);
    return (
        <>
        <h1>Id: {id}</h1>
        <View post={post} />
        </>
    )
}