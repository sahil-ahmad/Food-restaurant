import React from 'react';
import Navbar from './componnets/Navbar';
import Home from './componnets/Home';
import About from './componnets/About';
import Manu from './componnets/Manu';
import Product from './componnets/Product';
import Review from './componnets/Review';
import Contact from './componnets/Contact';
import Footer from "./componnets/Footer";



const App = () => {
    return (
        <>
            <Navbar />
            <Home/>
            <About/>
            <Manu/>
            <Product/>
            <Review/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;