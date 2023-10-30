import type {Component} from 'solid-js';
import NavBar from "../common/navbar";
import "../../assets/classes.css";
import {showModalBackDrop} from "../../store";

const Classes: Component = () => {
    return (
        <div class="classes-page-container">
            {/*<div class={showModalBackDrop() ? "modal-backdrop" : ""} />*/}
            <NavBar/>

            <div class="classes-hero"></div>
            <div class="classes-backdrop">

                <div class="container h-100 w-100 ">

                    <div class="d-flex justify-content-center align-items-center w-100  h-100">
                        <div
                            class="col-lg-4 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center">On-Going
                        </div>
                        <div class="col-lg-1 mx-1"></div>
                        <div
                            class="col-lg-4 text-white h3 text-uppercase py-4 home-border d-flex justify-content-center align-items-center">New
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Classes;
