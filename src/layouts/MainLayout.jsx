import React, { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const MainLayout = () => {
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
          document.documentElement.classList.add(theme); // Add saved theme class
        }
      }, []);
    return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
    );
};

export default MainLayout;