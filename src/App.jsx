import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Caps from "./components/Caps";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section id="heroSection">
        <Hero />
      </section>

      <section id="productSect">
        <Carousel />
      </section>
      
      <section>
        <Caps />
      </section>
    </>
  );
}

export default App;
