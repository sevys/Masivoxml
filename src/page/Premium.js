import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CardticketPremium from "../component/CardticketPremium";
import '../assets/stylesheet/Basic.css'
class Premium extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            last_name:"",
            phone:""
        }
    }


    changeField(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}

        }))
    }
    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="Separator">
                </div>
                <div>
                    <div className="licencia mt-5">
                        <h2 >
                            Licencia +SIVO XML Premium
                        </h2>
                    </div>
                    <div className="row justify-content-center mb-5 p-3">
                        <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-8 col-sm-8 justify-content-center">
                            <form action="#" target="" method="get" name="formDatosPersonales">

                                <input type="text" name="nombre" id="nombre" placeholder="Nombre completo"/>
                                <input type="email" name="email" id="email" placeholder="Correo Electronico" required />
                                <input type="text" name="apellidos" id="apellidos" placeholder="Telefono "/>
                                <input type ="number" name="asunto" id="asunto" placeholder="1"/>

                                <div className="d-grid gap-2 col-12">
                                    <input type="submit" name="enviar" value="Siguiente"/>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-8 col-sm-8 mt-3 m-3 ">
                            <CardticketPremium/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Premium;