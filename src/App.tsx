import type { Component } from 'solid-js';


import {Route, Router, Routes} from "@solidjs/router";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Classes from "./pages/classes/classes";
import ContactUs from "./pages/contactUs/contact_us";

const App: Component = () => {
  return (
      <Router>
        <Routes>
          <Route path="/contact_us" component={ContactUs} /> {/* 👈 Define the home page route */}
          <Route path="/classes" component={Classes} /> {/* 👈 Define the home page route */}
          <Route path="/shop" component={Shop} /> {/* 👈 Define the home page route */}
          <Route path="/" component={Home} /> {/* 👈 Define the home page route */}
        </Routes>
      </Router>
  );
};

export default App;
