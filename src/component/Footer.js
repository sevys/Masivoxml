import React from "react";
import css from "../assets/stylesheet/Footer.css"
class Footer extends React.Component{
    render(){
        return(
            <footer className=" text-center text-lg-start bg-light ">
                <br/>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-5">
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
                            <div className="col-md-7 col-lg-7 col-xl-7 mx-auto mb-7">
                                <p className="footerTextDireccion">
                                    direccion
                                    <br/>
                                    Av. Platino No. 173, Fraccionamiento, Valle Dorado, Col. Rosario Poniente,,Tuxtla Gutiérrez,
                                    <br/>
                                    Chiapas C.P. 29014
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 footerAlign">
                                <p>
                                    direccion
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-3 col-xl-2 footerAlign">
                                <p>
                                    holi
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
            </footer>
        )
    }
}
export default Footer;