
import './App.css';
import React from "react";
import {
  Link,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Booking from './components/Booking';
import RestaurantTableForm from './components/RestaurantTableForm';
import PaymentPage from './components/payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "payment",
    element: <PaymentPage />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "payment",
    element: <PaymentPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
