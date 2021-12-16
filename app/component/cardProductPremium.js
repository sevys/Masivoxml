import React from 'react';
import css from "../assets/stylesheet/cardProductPremium.css"
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

                                    <li>Organización de XML</li>

                                    <li>Exportar información a Excel</li>

                                    <li>Filtrado de Información</li>

                                    <li>Exportar a PDF la información</li>

                                    <li>Exportaciión a pdf de Complemento Servicios de
                                        Plataformas Tecnoliógicas</li>

                                    <li>Actualizaciones gratuitas</li>

                                    <li>Exportación xml a PDF (Facturas y Nóminas)
                                        Complemento Servicios de Plataformas Tecnológicas exportacin a PDF</li>

                                    <li>Descarga masiva XML por RFC y Fiel</li>

                                    <li>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)</li>

                                    <li>Validación de vigentes y cancelados</li>

                                    <li>Generación de PDF con Logo</li>

                                </p>
                                <a href="#" className="btn btn-primary" id="buttonPremium">COMPRAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default cardProductPremium;