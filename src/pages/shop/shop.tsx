import type {Component} from 'solid-js';
import NavBar from "../common/navbar";
import "../../assets/shop.css";
import {showModalBackDrop} from "../../store";
import NavBarMobile from "../common/navbar_mobile";

const Shop: Component = () => {
    return (
        <div class="shop-backdrop" >
            <NavBarMobile/>
            {/*<div class={showModalBackDrop() ? "modal-backdrop" : ""} />*/}
            <div class="shop-hero" ></div>
            <div class="shop-container">
                <div class="container h-100 " >
                    <div class=" w-100 d-flex justify-content-center align-items-center  ">
                        
                        <div class="  d-flex justify-content-center row w-75" style="">

                                <div class="col-lg-3 col-md-6 col-sm-12 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center  px-5 ">Crockery</div>
                                 <div class="col-lg-1  col-md-0 col-sm-0 mx-1"></div>
                                <div class="col-lg-3 col-md-6 col-sm-12 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center px-5 ">Deco</div>
                                 <div class="col-lg-1 mx-1"></div>
                                 <div class="col-lg-3 col-md-6 col-sm-12 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center px-5  ">Tiles</div>

                                {/* <div class="col-lg-12 my-3"></div> */}

                                <div class="col-lg-3 col-md-6 col-sm-12 text-white h3 text-uppercase py-4 home-border text-center d-flex justify-content-center align-items-center px-5 " >Clay</div>
                                 <div class="col-lg-1 mx-1"></div> 
                                <div class="col-lg-3 col-md-6 col-sm-12 text-white h3 text-uppercase py-4 home-border text-center d-flex justify-content-center align-items-center px-5">Customs</div>
                                 <div class="col-lg-1 mx-1"></div> 
                                 <div class="col-lg-3 col-md-6 col-sm-12 text-white h3 text-uppercase py-4 home-border text-center d-flex justify-content-center align-items-center px-5">Curios</div>

                        </div>
                    </div>
                </div>
                
               
            </div>

           
        </div>
    );
};

export default Shop;
