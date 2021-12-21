import React from "react";
import css from "../assets/stylesheet/CardTicket.css"
class CardticketPremium extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div>
                    <div className="card text-center " id="CardSizeTicket">
                        <div className="card-body" >
                            <p className="card-textBasic justify-content-center" id="CardSizeBody">
                                <p>Precio Unitario --------$ 1799.00</p>
                                <p>Precio Normal ---------$ 1199</p>
                                <p>Subtotal ----------------$ 1799</p>
                                <p>IVA ----------------------$ 287.84</p>
                                <br/>
                                <div className="LineTicket">
                                </div>
                                <p>Total --------------------$ 2086.84</p>
                            </p>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default CardticketPremium;