import { useState } from 'react'
import './App.css';
import Home from './page/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        {/* <Outlet /> */}
        <Navbar />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
      ],
    },
  ]);
  return (
    <>
      <div>
        {/* <RouterProvider router={router} /> */}
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}


export default App
