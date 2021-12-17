import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import '../assets/stylesheet/Basic.css'
class Basic extends React.Component{
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
                <div>
                    <div className="licencia mt-5">
                        <h2 >
                            Licencia +SIVO XML Básico
                        </h2>
                    </div>
                    <div>
                        <form action="#" target="" method="get" name="formDatosPersonales">

                            <input type="text" name="nombre" id="nombre" placeholder="Nombre completo"/>
                            <input type="email" name="email" id="email" placeholder="Correo Electronico" required />
                            <input type="text" name="apellidos" id="apellidos" placeholder="Telefono "/>
                             <input type ="text" name="asunto" id="asunto" placeholder="codigo de promocion"/>
                            <input type ="number" name="asunto" id="asunto" placeholder="1"/>

                            <input type="submit" name="enviar" value="Siguiente"/>
                    </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Basic;