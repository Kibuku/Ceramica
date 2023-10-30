import type {Component} from 'solid-js';
import NavBar from "../common/navbar";
import "../../assets/shop.css";
import {showModalBackDrop} from "../../store";

const Shop: Component = () => {
    return (
        <div class="shop-container" >
            <NavBar/>
            {/*<div class={showModalBackDrop() ? "modal-backdrop" : ""} />*/}
            <div class="shop-hero" ></div>
            <div class="shop-backdrop">
                <div class="container h-100" >
                    <div class="h-100 w-100 d-flex justify-content-center align-items-center ">
                        
                        <div class="container-fluid d-flex justify-content-center">
                            <div class="  row home-container2  ">
                                <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center ">Crockery</div>
                                 <div class="col-lg-1 mx-1"></div> 
                                <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center ">Deco</div>
                                 <div class="col-lg-1 mx-1"></div> 
                                {/* <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center ">Tiles</div>  */}

                                <div class="col-lg-12 my-3"></div>

                                <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border text-center d-flex justify-content-center align-items-center " >Clay</div>
                                 <div class="col-lg-1 mx-1"></div> 
                                <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border text-center d-flex justify-content-center align-items-center">Customs</div>
                                 <div class="col-lg-1 mx-1"></div> 
                                {/* <div class="col-lg-5 text-white h3 text-uppercase py-4 home-border text-center d-flex justify-content-center align-items-center">Curios</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>

           
        </div>
    );
};

export default Shop;
