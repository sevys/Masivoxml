import React from "react";
import css from "../assets/stylesheet/CardTicket.css"
class CardTicket extends React.Component{
    render() {
        return(
            <React.Fragment>
            <div>
                <div className="card justify-content-center " id="CardSizeTicket">
                    <div className="card-body" >
                        <p className="text-justify">
                            <p>Precio Unitario --------$ 1199.00</p>
                            <p>Precio Normal ---------$ 1199</p>
                            <p>Subtotal ----------------$ 1199</p>
                            <p>IVA ----------------------$ 191.84</p>
                            <br/>
                            <div className="LineTicket">
                            </div>
                            <p>Total --------------------$ 1390.84</p>
                        </p>

                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }

}
export default CardTicket;