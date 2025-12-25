import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [admin, setAdmin] = useState(
    !!localStorage.getItem("token")
  );

  // Admin route
  if (window.location.pathname === "/admin") {
    return admin ? (
      <AdminDashboard />
    ) : (
      <AdminLogin onLogin={() => setAdmin(true)} />
    );
  }

  // Normal portfolio site
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

