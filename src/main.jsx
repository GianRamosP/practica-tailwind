import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./pages/Contact";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import Hotel from "./pages/Hotel";
import Prices from "./pages/Prices";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Error from "./components/Error";
import Offers from "./pages/Offers";

import Admin from "./pages/admin/Admin";
import GestoresComponent from "./components/GestoresComponent";

import GeneralManagement from "./pages/GeneralManagement";
import Login from "./pages/Login";
import HotelManagement from "./pages/HotelManagement";
import Signup from "./pages/Signup";
import AdministrarDuenos from "./pages/admin_users_hotels";
import Filter from "./pages/filter/Filter";

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
    element: <Admin />,
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
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/gestores",
    element: <GestoresComponent />,
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
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/offers",
    element: <Offers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
