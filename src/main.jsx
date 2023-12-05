import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import Hotel from "./pages/Hotel";
import Prices from "./pages/Prices";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Error from "./components/Error";
import GeneralManagement from "./pages/GeneralManagement";
import Login from "./pages/Login";
import HotelManagement from "./pages/HotelManagement";
import Signup from "./pages/Signup";
import AdministrarDuenos from "./pages/admin_users_hotels";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "contact/:contactid",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/prices",
    element: <Prices />,
  },
  {
    path: "/services",
    element: <Prices />,
  },
  {
    path: "/whyus",
    element: <WhyUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/general-management",
    element: <GeneralManagement />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hotel-management",
    element: <HotelManagement />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin_users_hotels",
    element: <AdministrarDuenos />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
