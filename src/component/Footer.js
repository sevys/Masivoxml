import React from "react";
import css from "../assets/stylesheet/Footer.css"
import telefono from "../assets/img/icons8-teléfono-50.png";
import carta from "../assets/img/icons8-message-64.png"
class Footer extends React.Component{
    render(){
        return(
            <footer className=" text-center text-lg-start bg-light ">
                <section className="">
                    <div className="container text-center text-md-start">

                        <div className="row mt-3">

                            <div className="col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 mx-auto mb-5">
                                <p>
                                        HORARIO DE ATENCION
                                    <br/>
                                    9:00 A.M a 5:00 P.M
                                </p>
                                <p>
                                    VENTAS
                                    <br/>
                                  ventas@masivoxml.com
                                </p>
                                <p>
                                   SOPORTE
                                    <br/>
                                    soporte@masivoxml.com
                                </p>
                            </div>
                            <div className="col-md-1 col-sm-1 col-lg-1 col-xl-1 col-xxl-1 mx-auto">
                                <div className="lineFooter"/>
                            </div>
                            <div className="col-md-8 col-sm-8 col-lg-2 col-xl-2 col-xxl-2 mx-auto">

                                <a>
                                    <img className="imgSizeFooter" src={telefono} />
                                </a>
                                <p>
                                    Tel. Cel.: 961 612 6245 ext. 3
                                    <br/>
                                    Oficina.: (961) 225 9998
                                </p>
                            </div>
                            <div className="col-md-12 col-lg-2 col-xl-2 col-xxl-2 col-sm-12 mx-auto">
                                <a>
                                    <img className="imgSizeFooter" src={carta} />
                                </a>
                                <p>
                                    contacto@masivoxml.com
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
                                <p className="footerTextDireccion">
                                    Direccion
                                    <br/>
                                    Av. Platino No. 173, Fraccionamiento, Valle Dorado, Col. Rosario Poniente,,Tuxtla Gutiérrez,
                                    <br/>
                                    Chiapas C.P. 29014
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="endBar text-center">
                    <br/>
                    <h6 className="text-uppercase text-white">Copyright © 2021</h6>
                </div>
            </footer>
        )
    }
}
export default Footer;