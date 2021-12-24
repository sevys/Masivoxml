import React from 'react';
import Header from "../component/Header";
import TerminosYcondiciones from "../component/TerminosYcondiciones";
import Footer from "../component/Footer";

class Terminos extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <TerminosYcondiciones/>
                </div>
                <div>
                    <Footer/>
                </div>

            </div>
        )
    }
}
export default Terminos;