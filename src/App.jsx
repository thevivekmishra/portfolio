import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Mywork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificates";
import Skills from "./components/Skills";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Mywork />
      <Certificate/>
      <Contact />
      <Footer />
      <Toaster/>
    </div>
  )
}
export default App