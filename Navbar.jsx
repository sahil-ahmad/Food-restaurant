import React, { useRef } from "react";
import {HashLink as Link} from 'react-router-hash-link'
import Logo from '../assets/images/logo.png';
import { Cart } from '../Data';

const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();
    const searchHandler = () => {
        searchRef.current.classList.toggle('active');
        cartRef.current.classList.remove('active');
        navbarRef.current.classList.remove('active');
    };
    const cartHandler = ()=>{
        cartRef.current.classList.toggle('active');
        searchRef.current.classList.remove('active');
        navbarRef.current.classList.remove('active');
    };
    const navbarHandler = ()=>{
        navbarRef.current.classList.toggle('active');
        searchRef.current.classList.remove('active');
        cartRef.current.classList.remove('active');

    }

    return (
        <>
            <header className="header">
                <a href="#" className="logo">
                    <img src={Logo} alt="Logo" />
                </a>
                <nav className="navbar" ref={navbarRef}>
                    <a smooth href="#home">Home</a>
                    <a smooth href="#about">About</a>
                    <a smooth href="#menu">Menu</a>
                    <a smooth href="#products">Products</a>
                    <a smooth href="#review">Review</a>
                    <a smooth href="#contact">Contact</a>
                   
                </nav>
                <div className="icons">
                    <div className="fas fa-search" onClick={searchHandler}></div>
                    <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
                    <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
                </div>
                <div className="search-from" ref={searchRef}>
                    <input type="search" placeholder="Search here..." id="search-box" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </div>

                <div className="cart-item-container" ref={cartRef}>
                    {Cart.map((item, index) => (
                        <div className="cart-item">
                            <span className="fas fa-times"></span>
                            <img src={item.img} />
                            <div className="content">
                                <h3>cart item 01</h3>
                                <div className="price">$15.99/</div>
                            </div>
                        </div>
                    ))}
                    <a className="btn" href="#">Checkout Now </a>
                </div>
            </header>
        </>
    );
};

export default Navbar;