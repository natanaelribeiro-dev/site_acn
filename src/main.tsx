import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import Hero from "./components/Hero.tsx";
import Cta from "./components/Cta.tsx";
import Cards from "./components/Cards.tsx";
import Footer from "./components/Footer.tsx";
import Carrosel from "./components/Carrosel.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <main className="w-100 d-flex align-items-center flex-column">
      <Hero />
      <Carrosel />
      <Cards />
      <Footer/>
      <Cta />
    </main>
  </StrictMode>,
);
