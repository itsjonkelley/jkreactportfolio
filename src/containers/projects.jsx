import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsMain from '../components/ProjectsMain';

class projects extends Component {
    render() {
        return (
            <>
            <Navbar />
            <br></br>
            <br></br>
            <ProjectsMain />
            <Footer />
            </>
            
        )
    }
}

export default projects;