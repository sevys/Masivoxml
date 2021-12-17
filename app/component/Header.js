import React from 'react';
import  '../assets/stylesheet/Header.css';
import logo from '../assets/img/logo.jpeg'

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header>
            <div >
                    <div className="container-fluid ">
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
                                    <a className="nav-link" href="#">INICIO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">VIDEOTUTORIALES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BASICO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">PREMIUM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">MANUAL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">TERMINOS Y CONDICIONES</a>
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
