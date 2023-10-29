import type {Component} from 'solid-js';

import  '../../assets/home.css';
import NavBar from "../common/navbar";
import {A} from "@solidjs/router";
const Home: Component = () => {
    return (
        <div  >
        {/*<NavBar/>*/}
            <header class="site-navbar mt-3">
                <div class="container-fluid">
                    <div class="row align-items-center">

                        <div class="site-logo col-6 text-black"><A href="/"><img src="images/7.png" alt="ceramica"
                                                                                 style="width:100px; height:100px"/></A>
                        </div>
                    </div>
                </div>
            </header>
        <div  class="home-hero" >

                <div class="container h-100 ">
                    <div class="h-100  w-100 d-flex justify-content-end align-items-center ">



                              <div class="row home-container1 " >
                                  <div  class=" col-lg-5 text-white h3 text-uppercase home-border  rounded-3 text-center">SHOP</div>
                                  <div class="col-lg-1 mx-1"></div>
                                  <div class="col-lg-5 text-white h3 text-uppercase py-2 home-border">CLASSES</div>

<div class="col-lg-12 my-3"></div>
                                  <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border">ABOUT US</div>
                                  <div class="col-lg-1 mx-1"></div>
                                  <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border" >CONTACT US</div>
                              </div>
                                


                    </div>
                </div>
                
               

        </div>
        </div>
    );
};

export default Home;
