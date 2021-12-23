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
               <div className="card mb-3"id="CardSize">
                   <div className="row g-0">
                   <div className="card-header text-center" id="colorHeader">
                       <h6 className="text-uppercase fw-bold mb-1 text-white">Gratuito( 30 dias). </h6>
                       <h5 className="text-uppercase fw-bold mb-1 text-white"> $0 </h5>
                   </div>
                   <div className="card-body">
                       <p className="text-justify card-text">
                           <li>Descarga masiva de XML del SAT (HASTA 100 XMLS)</li>
                           <br/>
                           <li>Organización de XML</li>
                           <br/>
                          <li> Exportar información a Excel (100 REGISTROS)</li>
                           <br/>
                           <li>Filtrado de Información</li>
                           <br/>
                           <li>Exportar a PDF la información (100 REGISTROS)</li>
                           <br/>
                           <li>Actualizaciones gratuitas</li>
                           <br/>
                           <li>Exportaciión a pdf de Complemento Servicios de Plataformas Tecnoliógicas</li>
                           <br/>
                           <li>Exportación xml a PDF (Facturas y Nóminas) (uno X uno)</li>
                           <br/>
                           <li>Complemento Servicios de Plataformas Tecnológicas exportación a PDF</li>
                           <br/>
                           <li>Descarga masiva XML por RFC</li>
                           <br/>
                           <li>Validación de listas negras del SAT (incumplidos, agraviados, desvirtuados, definitivos)(100 registros)</li>
                           <br/>
                           <li>Validación de vigentes y cancelados(100 registros)</li>
                       </p>
                       <div className="d-grid gap-2 col-10 mx-auto">
                       <a href="#" className="btn btn-primary" id="button">DESCARGAR</a>
                       </div>
                     </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
}
}
export default cardProductFree;