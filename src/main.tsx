import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sobre from "./components/Sobre.tsx";
import Carosel from "./components/Carosel.tsx";
import Hero from "./components/Hero.tsx";
import Cta from "./components/Cta.tsx";
import Cards from "./components/Cards.tsx";
import Footer from "./components/Footer.tsx";
import Carrosel from "./components/Carrosel.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <main>
      <Hero />
      <Carrosel />
      <Cta />
      <Cards />
      <Footer/>
    </main>
  </StrictMode>,
);
