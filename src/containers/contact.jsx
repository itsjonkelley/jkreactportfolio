import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMain from '../components/ContactMain';


class contact extends Component {
    render() {
        return (
            <>
            <Navbar />
            <br></br>
            <br></br>
            <ContactMain />
            <Footer />
            </>
        )
    }
}

export default contact;