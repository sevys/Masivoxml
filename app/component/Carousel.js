import React from 'react';
import carousel from '../assets/img/carousel.jpeg';

class Carousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carousel} className="d-block w-100" alt="es una laptop,
                            que esta sobre un escritorio" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>¿QUÉ ES  +  IVO XML?</h5>
                                    <div className="rectangulo"/>
                                    <p>+IVO XML es un programa contable,
                                        que te permite tener el control de las facturas<br/>
                                        emitidas y recibidas en tu negocio,
                                        lo cual facilita la administración y el<br/>
                                        cumplimiento de tus obligaciones fiscales.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={carousel} className="d-block w-100 " alt="es una laptop
                            que esta sobre unescritorio"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Requisitos de Instalación</h5>
                                    <p>Sistema Operativo Windows 7, 8, 8.1, 10<br/>
                                        <br/>
                                        Internet Explorer 10 u 11<br/>
                                        <br/>
                                        Meter en excepción de antivirus para poder realizar las actualizaciones</p>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}

export default Carousel;