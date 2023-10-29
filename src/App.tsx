import type { Component } from 'solid-js';


import {Route, Router, Routes} from "@solidjs/router";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Classes from "./pages/classes/classes";
import ContactUs from "./pages/contactUs/contact_us";
import Cart from "./pages/common/cart/cart";
import CartPayment from "./pages/common/cart/cart_payment";
import AboutUs from "./pages/aboutUs/aboutUs";

const App: Component = () => {
  return (
      <Router>
        <Routes>
          {/*<Route  path="/cart_payment" component={CartPayment} />*/}
          {/*<Route path="/cart" component={Cart} />*/}
          <Route path="/contact_us" component={ContactUs} />
          <Route path="/about_us" component={AboutUs} />
          <Route path="/classes" component={Classes} />
          <Route path="/shop" component={Shop} />  
          <Route path="/" component={Home} />
        </Routes>
      </Router>
  );
};

export default App;
