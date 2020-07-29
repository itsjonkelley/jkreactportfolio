import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navbar () {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
        <Link className="navbar-brand logo-text" to="/">
        JK
        </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <Link
                      to="/"
                      className={
                        window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                      }
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/projects"
                      className={
                        window.location.pathname === "/projects" ? "nav-link active" : "nav-link"
                      }
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link
                      to="/contact"
                      className={
                        window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                      }
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}

export default Navbar;

