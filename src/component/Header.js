import React from 'react';
import  '../assets/stylesheet/Header.css';
import logo from '../assets/img/logo.jpeg';
import {Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header className="mb-5">
            <div >
                <div className="container-lg-12 container-xl-12 container-xxl-12 container-md-12 container-sm-12 fixed-top">
                    <div className="header-hihg">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <nav className="navbar navbar-light bg-light">
                                    <div className="container">
                                        <a className="navbar-brand" href="#">
                                            <img src={logo} alt="es el logo de la empresa"
                                                 height="30"/>
                                        </a>
                                    </div>
                                </nav>
                            </li>
                        </ul>
                    </div>

                        <nav className="navbar navbar-expand-md header-button align-content-center">
                            <div className="container-fluid align-content-center">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon text-white">|||</span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                     <a className="nav-link " style={{color: 'white'}}>INICIO</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Videotutoriales" style={{ textDecoration: 'none' }}>
                                       <a className="nav-link " style={{color: 'white'}}>VIDEOTUTORIALES</a>
                                    </Link>

                                </li>
                                <li className="nav-item" >
                                    <Link to="/Basic" style={{ textDecoration: 'none' }}>
                                        <a className="nav-link " style={{color: 'white'}}>BASICO</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Premium' style={{ textDecoration: 'none' }}>
                                        <a className="nav-link " style={{color: 'white'}}>PREMIUM</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " style={{color: 'white'}}>MANUAL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " style={{color: 'white'}}>TERMINOS Y CONDICIONES</a>
                                </li>
                            </ul>
                                </div>
                            </div>
                        </nav >
                    </div>
            </div>
            </header>
        )
    }

}
export  default Header;
