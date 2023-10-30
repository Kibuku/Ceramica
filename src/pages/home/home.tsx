import type {Component} from 'solid-js';

import '../../assets/home.css';

import {A, useNavigate} from "@solidjs/router";
import {showModalBackDrop} from "../../store";

const Home: Component = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/*<div class={showModalBackDrop() ? "modal-backdrop" : ""} />*/}

            <header class="site-navbar mt-3">
                <div class="container-fluid">
                    <div class="row align-items-center">

                        <div class="site-logo col-6 text-black"><A href="/"><img src="images/7.png" alt="ceramica"
                                                                                 style="width:100px; height:100px"/></A>
                        </div>
                    </div>
                </div>
            </header>
            <div class="home-hero">
            

                <div class="container h-100 ">
                    
                    <div class="h-100  w-100 d-flex justify-content-end align-items-center ">


                        <div class="row home-container1 ">
                            <div
                                class=" col-lg-5 text-brown h2 py-4 home-border d-flex align-items-center justify-content-center" onClick={(e)=>{
                                    e.preventDefault();
                                    navigate("/shop");
                            }}>SHOP
                            </div>
                         <div class="col-lg-1 mx-1"></div>
                            <div class="col-lg-5 text-brown h2 py-4 home-border text-center d-flex align-items-center justify-content-center" onClick={(e)=>{
                                navigate("/classes");
                            }}>CLASSES</div>

                        <div class="col-lg-12 my-3"></div>
                                  <div class="col-lg-5 text-brown h3 py-4 home-border text-center d-flex align-items-center justify-content-center"  onClick={(e)=>{
                                navigate("/about_us");
                            }}>ABOUT US</div>
                                  <div class="col-lg-1 mx-1"></div>
                                  <div class="col-lg-5 text-brown h3 py-4 home-border text-center d-flex align-items-center justify-content-center" onClick={(e)=>{
                                navigate("/contact_us");
                            }} >CONTACT US</div>
                        </div>
                                


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
