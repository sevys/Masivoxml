import React from 'react';
import '../assets/stylesheet/Home.css'
import Card from "../component/cardProductFree";
import CardBasic from "../component/cardProductBasic";
import CardPremium from "../component/cardProductPremium";
import Header from "../component/Header";
import Carousel from '../component/Carousel';
class home extends React.Component{
    constructor(props) {
        super(props);
    }
       render() {
           return(
               <div>
                   <section><Header/></section>
                   <section><Carousel/></section>
                   <section className="Home">
                       <div className="container">
                           <div className="row justify-content-center ">
                               <div className="col-lg-3 mt-5">
                                   <Card/>
                               </div>
                               <div className="col-lg-3 mt-5">
                                   <CardBasic/>
                               </div>
                               <div className="col-lg-3 mt-5">
                                   <CardPremium/>
                               </div>
                           </div>
                       </div>
                   </section>
               </div>
           )
        }
    }
export default home;
