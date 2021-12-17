import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
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
                    <div>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Basic;