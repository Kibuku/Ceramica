import type {Component} from 'solid-js';
import NavBar from "../common/navbar";
import "../../assets/classes.css";
import {showModalBackDrop} from "../../store";

const Classes: Component = () => {
    return (
        <div  class="classes-page-container" >
            {/*<div class={showModalBackDrop() ? "modal-backdrop" : ""} />*/}
            <NavBar/>

            <div  class="classes-hero" ></div>
            <div  class="classes-backdrop">

                <div  class="container h-100">
                    <div  class="row h-100 w-100 ">
                        <div  class="col-12 d-flex justify-content-center align-items-center">

                            <div  class="row w-auto " >
                                <div  class="col-lg-6 text-white h2 text-uppercase  py-2 border-1">On-Going</div>
                                <div  class="col-lg-6 text-white h2 text-uppercase py-2">New</div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;
