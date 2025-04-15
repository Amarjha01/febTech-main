import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/Global/ScrollToTop";
import PopUpContact from "./components/Global/PopUpContact";

function App() {
  useEffect(() => {
    if (window.innerWidth <= 500) {
      document.body.style.zoom = "95%";
    }
  }, []);

  return (
    <>
    <PopUpContact />
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
