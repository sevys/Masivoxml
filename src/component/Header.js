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
            <header>
            <div >
                    <div className="container-lg-12 container-xl-12 container-xxl-12 container-md-12 container-sm-12">
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

                        <div className="header-button">
                            <ul className="nav justify-content-center">
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
                        </div >
                    </div>
            </div>
            </header>
        )
    }

}
export  default Header;
