import { useState } from "react";
import { Route } from "react-router-dom";

import Header from "../../components/Header/Header"
import Banner from '../../components/Banner/Banner'
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

export default function Homepage(props){
   

    return(
        <>
		<Header isLogin={props.isLogin} handleLogin = {props.handleLogin} />
		<Banner />
		<Main posts={props.posts}/>
		<Footer />
        </>
    )
}