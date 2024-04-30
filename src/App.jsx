import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Mywork from "./components/MyWork";
import Contact from "./components/Contact";
import FollowAccounts from "./components/FollowAccounts";
import Footer from "./components/Footer";
import Certificate from "./components/Certificates";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Certificate/>
      <Contact />
      <FollowAccounts />
      <Footer />
    </div>
  )
}
export default App