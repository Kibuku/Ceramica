import {Component, createSignal} from "solid-js";
import {setShowModalBackDrop, setShowNavbar, showNavbar} from "../../store";


const NavBarMobile: Component = () => {

    return (
        <>
            {/*<!-- Fonts -->*/}
            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link href="https://fonts.gstatic.com" rel="preconnect"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                rel="stylesheet"/>

            {/* <!-- Vendor CSS Files -->*/}
            <link href="public/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="public/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="public/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
            <link href="public/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
            <link href="public/vendor/aos/aos.css" rel="stylesheet"/>

            {/* <!-- Template Main CSS File -->*/}
            <link href="public/css/main.css" rel="stylesheet"/>
            {/*  <!-- ======= Header ======= -->*/}
            <header id="header" class="header sticky-top d-flex align-items-center">
                <div class="container-fluid d-flex align-items-center justify-content-between">

                    <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
                        {/*    <!-- Uncomment the line below if you also wish to use an image logo -->*/}
                        {/*  <!-- <img src="assets/img/logo.png" alt=""> -->*/}
                        <h1>Ceramica</h1>
                        <span>.</span>
                    </a>

                    {/*  <!-- Nav Menu -->*/}
                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><a href="/" class="nav-link active">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/classes">Classes</a></li>
                            <li><a href="/about_us">About Us</a></li>
                            <li><a href="/contact_us">Contact Us</a></li>
                            <li>
                                <a href="" onClick={(e) => {
                                    e.preventDefault();
                                    handleOpen()
                                    setShowModalBackDrop(true)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         class="bi bi-cart" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>

                        <i class={showNavbar() ? "mobile-nav-toggle d-xl-none bi bi-x": "mobile-nav-toggle d-xl-none bi bi-list"} onClick={(e)=>{e.preventDefault(), setShowNavbar(!showNavbar())}}></i>
                    </nav>
                    {/*  <!-- End Nav Menu -->*/}

                    <a class="btn-getstarted" style="opacity:0" href="index.html#about">Get Started</a>

                </div>
            </header>
            {/* <!-- End Header --> */}

            {/*<!-- Vendor JS Files --> */}
            <script src="public/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="public/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="public/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="public/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="public/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="public/vendor/aos/aos.js"></script>
            <script src="public/vendor/php-email-form/validate.js"></script>

           {/* <!-- Template Main JS File --> */}

        </>
    )
}

export default NavBarMobile;