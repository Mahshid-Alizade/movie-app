import { useState } from "react";
import heroImg from "./assets/hero.png";
import Navbar from "./page/Navbar";
import HeroSection from "./page/HeroSection";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
