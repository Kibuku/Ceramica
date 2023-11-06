import type {Component} from 'solid-js';
import NavBar from "../common/navbar";
import "../../assets/classes.css";
import {showModalBackDrop} from "../../store";
import NavBarMobile from "../common/navbar_mobile";

const Classes: Component = () => {
    return (
        <div class="classes-page-container">
            {/*<div class={showModalBackDrop() ? "modal-backdrop" : ""} />*/}
            <NavBarMobile/>

            <div class="classes-hero"></div>
            <div class="classes-backdrop">

                <div class="container h-100 w-100 bg-dark">

                    <div class="d-flex mt-5 justify-content-center align-items-center h-100  bg-danger" style="padding-top:10%">
                        
                        <div
                            class="col-lg-3  text-white  h6 text-uppercase py-4 home-border 
                            d-flex justify-content-center align-items-center" >Book a Class
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Classes;
