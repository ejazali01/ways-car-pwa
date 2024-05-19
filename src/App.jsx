import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Fair from "./components/Fair";
import ChauffeurService from "./components/ChauffeurService";
import Transfers from "./components/Transfers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
          <Navbar />
          <LandingPage />
          <Services />
          <Fair />
          <ChauffeurService />
          <Transfers />
          <Footer />
      </div>
    </>
  );
}

export default App;
