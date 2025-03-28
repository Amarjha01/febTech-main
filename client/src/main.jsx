import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Project from "./pages/Project/Project.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import { Client } from "./pages/Client/Client.jsx";
import Career from "./pages/Careers/Career.jsx";
import Services from "./pages/Services/Services.jsx";
import ServicesForm from "./components/ServicesForm.jsx";
import Certificate from "./pages/Certificate/Certificate.jsx";
import NavGallery from "./pages/About/NavGallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <NavGallery />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/serviceform/:service",
        element: <ServicesForm />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "/careers",
        element: <Career />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
