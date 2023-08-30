import { useEffect, useState } from 'react'
import './App.css';
import Home from './page/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [active, setActive] = useState(false);

  const Layout = () => {
    return (
      <div className="app">
        <Outlet />
        <Navbar active={active} setActive={setActive}/>
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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}


export default App
