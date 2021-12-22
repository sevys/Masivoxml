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

                                <h5>¿QUÉ ES  +  IVO XML?</h5>
                                <p>+IVO XML es un programa contable,
                                    que te permite tener el control de las facturas<br/>
                                    emitidas y recibidas en tu negocio,
                                    lo cual facilita la administración y el<br/>
                                    cumplimiento de tus obligaciones fiscales.</p>
                                <button>Obtener</button>

                            </div>
                            <div className="image-container d-flex justify-content-center align-items-center flex-column" style={{backgroundImage: "url(" + carousel + ")"}}>
                                <h5>Requisitos de Instalación</h5>
                                <p>Sistema Operativo Windows 7, 8, 8.1, 10<br/>
                                    <br/>
                                    Internet Explorer 10 u 11<br/>
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