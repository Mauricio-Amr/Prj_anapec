import './App.css'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../Components/template/Logo'
import Nav from '../Components/template/Nav'
import Main from '../Components/template/Main'
import Footer from '../Components/template/Footer'
import Header from '../Components/template/Header'

export default props =>
<div className="app">
    <Logo/>
    <Header/>
    <Nav/>
    <Main/>
    <Footer/>
</div>