import type { Component } from 'solid-js';


import {Route, Router, Routes} from "@solidjs/router";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Classes from "./pages/classes/classes";
import ContactUs from "./pages/contactUs/contact_us";
import Cart from "./pages/cart/cart";
import CartPayment from "./pages/cart/cart_payment";

const App: Component = () => {
  return (
      <Router>
        <Routes>
          <Route  path="/cart_payment" component={CartPayment} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact_us" component={ContactUs} />
          <Route path="/classes" component={Classes} />  
          <Route path="/shop" component={Shop} />  
          <Route path="/" component={Home} />
        </Routes>
      </Router>
  );
};

export default App;
