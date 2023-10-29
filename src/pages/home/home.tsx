import type {Component} from 'solid-js';

import  '../../assets/home.css';
import NavBar from "../common/navbar";
const Home: Component = () => {
    return (
        <div  >
        <NavBar/>
        <div  class="hero" >
            <div>
                <div class="container h-100">
                    <div class="row h-100">
                        <div >

                            <div class="row">
                                <div class="col-lg-4 text-white h2 text-uppercase  py-2 border-1">SHOP</div>
                                <div class="col-lg-4 text-white h2 text-uppercase py-2">CLASSES</div>
                                <div class="col-lg-4 text-white h2 text-uppercase py-2">ABOUT US</div>
                                <div class="col-lg-4 text-white h2 text-uppercase " >CONTACT US</div>
                                
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
