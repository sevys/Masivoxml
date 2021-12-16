import React from 'react';
import Card from "../component/cardProductFree";
import CardBasic from "../component/cardProductBasic";
import CardPremium from "../component/cardProductPremium";
class home extends React.Component{
    constructor(props) {
        super(props);
    }
       render() {
           return(
               <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-lg-3">
                   <Card/>
                       </div>
                       <div className="col-lg-3">
                           <CardBasic/>
                       </div>
                       <div className="col-lg-3">
                           <CardPremium/>
                       </div>
                     </div>
               </div>
           )
        }
    }
export default home;
