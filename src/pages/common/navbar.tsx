import type {Component} from 'solid-js';
import {Link} from "@solidjs/router";

const NavBar: Component = () => {
    return (
        <div >
            <header class="site-navbar mt-3">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="site-logo col-6 text-black"><a href="index.html">Brand</a></div>

                        <nav class="mx-auto site-navigation">
                            <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                <li><Link href="/" class="nav-link active">Home</Link></li>
                                <li><Link href="/shop">Shop</Link></li>
                                <li><Link href="/classes">Classes</Link></li>
                                <li><Link href="/about_us">About Us</Link></li>
                                <li><Link href="/contact_us">Contact Us</Link></li>
                                <li><Link href="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                </Link></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
