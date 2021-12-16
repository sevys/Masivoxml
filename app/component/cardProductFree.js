import React from 'react';
import css from "../assets/stylesheet/cardProductFree.css";
class cardProductFree extends React.Component{
constructor(props) {
    super(props);

}
render() {
    return(
        <React.Fragment>
           <div>
               <div className="card text-center mb-3"id="CardSize">
                   <div className="row g-0">
                   <div className="card-header" id="colorHeader">
                      Gratuito( 30 dias).
                             $0
                   </div>
                   <div className="card-body">
                       <p className="card-text">
                           <li>Descarga masiva de XML del SAT (HASTA 100 XMLS)</li>

                           <li>Organización de XML</li>

                          <li> Exportar información a Excel (100 REGISTROS)</li>

                           <li>Filtrado de Información</li>

                           <li>Exportar a PDF la información (100 REGISTROS)</li>

                           <li>Actualizaciones gratuitas</li>

                           <li>Exportaciión a pdf de Complemento Servicios de Plataformas Tecnoliógicas</li>

                           <li>Exportación xml a PDF (Facturas y Nóminas) (uno X uno)</li>

                           <li>Complemento Servicios de Plataformas Tecnológicas exportación a PDF</li>

                           <li>Descarga masiva XML por RFC</li>

                           <li>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)(100 registros)</li>

                           <li>Validación de vigentes y cancelados(100 registros)</li>
                       </p>
                       <a href="#" className="btn btn-primary" id="button">DESCARGAR</a>
                     </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
}
}
export default cardProductFree;