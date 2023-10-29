import type {Component} from 'solid-js';
import {A} from "@solidjs/router";
import {createSignal} from "solid-js";

const NavBar: Component = () => {
    const [show, setShow] = createSignal(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // @ts-ignore
    return (
        <div >
            <header class="site-navbar mt-3">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        {/*<div class="site-logo col-6 text-black"><a href="index.html">Brand</a></div>*/}
                        <div class="site-logo col-6 text-black"><A href="/"><img src="images/7.png" alt="ceramica"  style="width:100px; height:100px"/></A></div>

                        <nav class="mx-auto site-navigation">
                            <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                <li><A href="/" class="nav-link active">Home</A></li>
                                <li><A href="shop">Shop</A></li>
                                <li><A href="/classes">Classes</A></li>
                                <li><A href="/about_us">About Us</A></li>
                                <li><A href="/contact_us">Contact Us</A></li>
                                <li><A href="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </A></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>




        </div>
    );
};

export default NavBar;
