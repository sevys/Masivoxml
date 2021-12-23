import React from 'react';
import css from "../assets/stylesheet/cardProductPremium.css"
import {Link} from "react-router-dom";
class cardProductPremium extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <React.Fragment>
                <div>
                    <div className="card mb-3" id="CardSizePremium">
                        <div className="row g-0">
                            <div className="card-header text-center" id="colorHeaderPremium">
                                <h6 className="text-uppercase fw-bold mb-1 text-white">Premium. </h6>
                                <h5 className="text-uppercase fw-bold mb-1 text-white"> $1,799.00/Anual. </h5>
                            </div>
                            <div className="card-body">
                                <p className="text-justify card-textPremium">
                                    <li>Descarga masiva de XML Podrás recuperar hasta 200 mil registros</li>
                                    <br/>
                                    <li>Organización de XML</li>
                                    <br/>
                                    <li>Exportar información a Excel</li>
                                    <br/>
                                    <li>Filtrado de Información</li>
                                    <br/>
                                    <li>Exportar a PDF la información</li>
                                    <br/>
                                    <li>Exportaciión a pdf de Complemento Servicios de
                                        Plataformas Tecnoliógicas</li>
                                    <br/>
                                    <li>Actualizaciones gratuitas</li>
                                    <br/>
                                    <li>Exportación xml a PDF (Facturas y Nóminas)
                                        Complemento Servicios de Plataformas Tecnológicas exportacin a PDF</li>
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
                                <Link  to='/Premium'>
                                    <a href="#" className="btn btn-primary" id="buttonPremium">COMPRAR</a>
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
export default cardProductPremium;