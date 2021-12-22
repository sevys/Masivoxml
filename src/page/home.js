import React from 'react';
import '../assets/stylesheet/Home.css'
import Card from "../component/cardProductFree";
import CardBasic from "../component/cardProductBasic";
import CardPremium from "../component/cardProductPremium";
import Header from "../component/Header";
import Footer from "../component/Footer";
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
                       <div className=" Home container-fluid mb-5">
                           <div className="row justify-content-center ">
                               <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-5 col-sm-8 mt-5 mb-5">
                                   <Card/>
                               </div>
                               <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-5 col-sm-8 mt-5 mb-5">
                                   <CardBasic/>
                               </div>
                               <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-5 col-sm-8 mt-5 mb-5">
                                   <CardPremium/>
                               </div>
                           </div>
                       </div>
                   </section>
                    <Footer/>
               </div>
           )
        }
    }
export default home;
