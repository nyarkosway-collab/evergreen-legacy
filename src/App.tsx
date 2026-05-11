import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Founder from "./components/Founder";
import Programs from "./components/Programs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Programs />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;