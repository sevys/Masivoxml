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
                    <div className="card text-center mb-3"id="CardSizePremium">
                        <div className="row g-0">
                            <div className="card-header" id="colorHeaderPremium">
                                Premium.
                                $1,799.00/Anual.
                            </div>
                            <div className="card-body">
                                <p className="card-textPremium">
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
                                <Link  to='/Premium'>
                                    <a href="#" className="btn btn-primary" id="button">COMPRAR</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default cardProductPremium;