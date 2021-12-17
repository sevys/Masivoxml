import React from 'react';
import '../assets/stylesheet/Home.css'
import Card from "../component/cardProductFree";
import CardBasic from "../component/cardProductBasic";
import CardPremium from "../component/cardProductPremium";
import Header from "../component/Header";
import Footer from "../component/Footer";
class home extends React.Component{
    constructor(props) {
        super(props);
    }
       render() {
           return(
               <div className="Home">
                   <section><Header/></section>
                   <section>
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
                   </section>
                   <section>
                       <Footer/>
                   </section>
               </div>
           )
        }
    }
export default home;
