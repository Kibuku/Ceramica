import type { Component } from 'solid-js';


import {Route, Router, Routes} from "@solidjs/router";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Classes from "./pages/classes/classes";
import ContactUs from "./pages/contactUs/contact_us";
import AboutUs from "./pages/aboutUs/aboutUs";
import {createSignal} from "solid-js";
import "./assets/navbar.css";
import {showNavbar} from "./store";


const App: Component = () => {
  return (

       <div class={showNavbar() ? "blog-page mobile-nav-active" : "blog-page"}>
           <Router>
               <Routes>
                   <Route path="/contact_us" component={ContactUs} />
                   <Route path="/about_us" component={AboutUs} />
                   <Route path="/classes" component={Classes} />
                   <Route path="/shop" component={Shop} />
                   <Route path="/" component={Home} />
               </Routes>
           </Router>
       </div>

  );
};

export default App;
