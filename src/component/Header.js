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

                <div className="container-fluid">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">

                                                <a className="navbar-brand" href="#">
                                                    <img src={logo} alt="es el logo de la empresa"
                                                         height="30"/>
                                                </a>



                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                               <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
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
                        </nav>
                    </div>
                </div>

        )
    }

}
export  default Header;
