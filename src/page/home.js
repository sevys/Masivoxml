import React from 'react';
import '../assets/stylesheet/Home.css'
import Card from "../component/cardProductFree";
import CardBasic from "../component/cardProductBasic";
import CardPremium from "../component/cardProductPremium";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Carousel from '../component/Carousel';
import laptop from"../assets/img/laptop2.png"
class home extends React.Component{
    constructor(props) {
        super(props);
    }
       render() {
           return(
               <div className=" container-lg-12 container-xl-12 container-xxl-12 container-md-12 container-sm-12">
                   <div ><Header/></div>
                   <div className="Separator">
                   </div>
                   <div>
                   <section className="mb-2"><Carousel/></section>
                       <div id="promoHome">
                            <div className="container-lg-12 container-xl-12 container-xxl-12 container-md-12 container-sm-12">
                                <br/>
                                <div className="row justify-content-center">
                                <div className="text-justify text-white col-lg-5 col-xl-5 col-xxl-5 col-md-6 col-sm-6 mb-2">
                                    <br/>
                                    <div className="card" id="cardPromo">
                                       <div className="card-body">
                                           <h2>+IVO XML PREMIUM.</h2>
                                    <h5>
                                        Incluye:
                                        <br/>
                                        Descarga masiva de XML hasta 200 mil registros,
                                        <br/>
                                        exportación de información a excel y a pdf,
                                        <br/>
                                        y muchisimos más beneficios.
                                    </h5>
                                    <br/>
                                    <h4>Consigue tu licencia premium ahora!!</h4>
                                    <br/>
                                    <h1>
                                        MX$ 1,799.00
                                    </h1>
                                    <h6>*por un año de licencia</h6>
                                    <br/>
                                    <div className="d-grid gap-2 col-6 col-auto">
                                        <a href="#" className="btn btn-primary" id="buttonPromo">Comprar ahora</a>
                                    </div>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-xl-5 col-xxl-5 col-md-5 col-sm-5 mb-2 m-3">
                                    <a>
                                        <img className="imgPromo" src={laptop} />
                                    </a>
                                </div>
                                </div>
                            </div>
                       </div>
                       <br/>
                   <section className="Home mt-5">
                       <div className=" Home container-lg-12 container-xl-12 container-xxl-12 container-md-12 container-sm-12 mb-5">
                           <div className="text-center mb-3">
                               <h2>Descubra qué plan es adecuado para usted:</h2>
                           </div>
                           <div className="row justify-content-center ">
                               <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-5 col-sm-7 mt-5 mb-5">
                                   <Card/>
                               </div>
                               <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-5 col-sm-7 mt-5 mb-5">
                                   <CardBasic/>
                               </div>
                               <div className="col-lg-4 col-xl-3 col-xxl-3 col-md-5 col-sm-7 mt-5 mb-5">
                                   <CardPremium/>
                               </div>
                           </div>
                       </div>
                   </section>
                   </div>
                    <Footer/>
               </div>
           )
        }
    }
export default home;
