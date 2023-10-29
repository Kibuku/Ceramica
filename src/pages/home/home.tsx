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

                            <div class="home-container">
                                <div class="col-lg-4 text-white h2 text-uppercase  py-2 border-1">SHOP</div>
                                <div class="col-lg-4 text-white h2 text-uppercase py-2">CLASSES</div>
                            </div>
                            <div class="home-container">
                                <div class="col-lg-4 text-white h2 text-uppercase py-1">ABOUT US</div>
                                <div class="col-lg-4 text-white h2 text-uppercase py-1" >CONTACT US</div>
                                
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
