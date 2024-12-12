import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import PhotoCard from "./components/PhotoCard";
import "./App.css";


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Carousel/>
    </>
  );
}

export default App;
