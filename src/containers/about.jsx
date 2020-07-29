import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import '../style.css'
import AboutMain from '../components/AboutMain';


class about extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Jumbotron />
            <AboutMain />
            <Footer />
            </>
        
        )
    }
}

export default about;