import React from 'react';
import carousel from '../assets/img/carousel.jpeg';
import '../assets/stylesheet/Caruosel.css'

class Carousel extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>

                    <div className="product-stripe">
                        <div className="stripe-container">
                            <div className="image-container d-flex justify-content-center align-items-center flex-column" style={{backgroundImage: "url(" + carousel + ")"}}>

                                <h5 className="pes">¿QUÉ ES  +  IVO XML?</h5>
                                <div className="linea-1"></div>
                                <p className="text-carousel">+IVO XML es un programa contable,
                                    que te permite tener el control de las facturas<br/>
                                    emitidas y recibidas en tu negocio,
                                    lo cual facilita la administración y el<br/>
                                    cumplimiento de tus obligaciones fiscales.</p>
                                <button className="btn-carousel">OBTENER</button>

                            </div>
                            <div className="image-container d-flex justify-content-center align-items-center flex-column" style={{backgroundImage: "url(" + carousel + ")"}}>
                                <h5 className="pes">Requisitos de Instalación</h5>
                                <div className="linea-2"></div>
                                <p className="text-carousel">Sistema Operativo Windows 7, 8, 8.1, 10
                                    <br/>
                                    Internet Explorer 10 u 11
                                    <br/>
                                    Meter en excepción de antivirus para poder realizar las actualizaciones</p>

                            </div>
                        </div>
                    </div>

            </>
        )
    }
}

export default Carousel;