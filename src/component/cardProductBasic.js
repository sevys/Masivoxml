import React from 'react';
import css from "../assets/stylesheet/cardProductBasic.css"
import {Link, Redirect } from "react-router-dom";
import {Button} from "bootstrap";

class cardProductBasic extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <React.Fragment>
                <div>
                    <div className="shadow card text-center mb-3"id="CardSizeBasic">
                        <div className="row g-0">
                            <div className="card-header" id="colorHeaderBasic">
                                <h6 className="text-uppercase fw-bold mb-1 text-white">Basico</h6>
                                <h5 className="text-uppercase fw-bold mb-1">$1,199.00/Anual.</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-textBasic">
                                    <li>Descarga masiva de XML del SAT (2000 al dia por RFC)</li>
                                    <br/>
                                    <li>Organización de XML</li>
                                    <br/>
                                    <li>Exportar información a Excel</li>
                                    <br/>
                                    <li>Filtrado de Información</li>
                                    <br/>
                                    <li>Exportar a PDF la información</li>
                                    <br/>
                                    <li>Exportaciión a pdf de Complemento Servicios de Plataformas Tecnoliógicas</li>
                                    <br/>
                                    <li>Actualizaciones gratuitas</li>
                                    <br/>
                                    <li>Exportación xml a PDF (Facturas y Nóminas)</li>
                                    <br/>
                                    <li>Complemento Servicios de Plataformas Tecnológicas exportación a PDF</li>
                                    <br/>
                                    <li>Descarga masiva XML por RFC y Fiel</li>
                                    <br/>
                                    <li>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)</li>
                                    <br/>
                                    <li>Validación de vigentes y cancelados</li>
                                    <br/>
                                    <li>Generación de PDF con Logo</li>

                                </p>
                                <div className="d-grid gap-2 col-10 mx-auto">
                                <Link  to='/Basic'>
                                    <a href="#" className="btn btn-primary" id="buttonBasic">COMPRAR</a>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default cardProductBasic;