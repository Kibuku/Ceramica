import type {Component} from 'solid-js';
import NavBar from "../common/navbar";
import "../../assets/shop.css";
import {showModalBackDrop} from "../../store";

const Shop: Component = () => {
    return (
        <div class="shop-container" >
            <NavBar/>
            <div class={showModalBackDrop() ? "modal-backdrop" : ""} />
            <div class="shop-hero" ></div>
            <div class="shop-backdrop">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-12 d-flex justify-content-center align-items-center">

                            <div class="row">
                                <div class="col-lg-4 text-white h2 text-uppercase  py-2 border-1">Crockery</div>
                                <div class="col-lg-4 text-white h2 text-uppercase py-2">Deco</div>
                                <div class="col-lg-4 text-white h2 text-uppercase py-2">Tiles</div>
                                <div class="col-lg-4 text-white h2 text-uppercase " >Clay</div>
                                <div class="col-lg-4 text-white h2 text-uppercase ">Customs</div>
                                <div class="col-lg-4 text-white h2 text-uppercase ">Curios</div>
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>

           
        </div>
    );
};

export default Shop;
