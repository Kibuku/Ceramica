import type {Component} from 'solid-js';

import  '../../assets/home.css';
import NavBar from "../common/navbar";
const Home: Component = () => {
    return (
        <div  >
        <NavBar/>
        
        <div  class="home-hero" >
            <div>
                <div class="container h-100">
                    <div class="row h-100">
                        <div >

                            <div class="home-container1">
                                <div  class=" col-lg-4 text-white h3 text-uppercase home-border  ">SHOP</div>
                                <div class="col-lg-4 text-white h3 text-uppercase py-2 home-border">CLASSES</div>
                            </div>
                            <div class="home-container2">
                                <div class="col-lg-3 text-white h3 text-uppercase py-4 home-border">ABOUT US</div>
                                <div class="col-lg-3 text-white h3 text-uppercase py-4 home-border" >CONTACT US</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </div>
        </div>
    );
};

export default Home;
