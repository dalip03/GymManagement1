import React from "react";
import '../Asset/css/style.css';
import '../Asset/css/barfiller.css';
import '../Asset/css/bootstrap.min.css';
import '../Asset/css/flaticon.css';
import '../Asset/css/font-awesome.min.css';
import '../Asset/css/magnific-popup.css';
// import '../Asset/css/owl.carousel.min.css';
import '../Asset/css/slicknav.min.css';

import logo from '../Asset/img/logo.png';
import User from "./User";
import { Badge, Button, IconButton, Link } from "@mui/material";
import { Login, LoginOutlined, LogoutOutlined, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";






function Navbar(){
    const navi = useNavigate();

    var uemail = localStorage.getItem("Id");
    // console.log(uemail)

    function logout() {
        localStorage.removeItem("Id")
        navi("/")
    }
    // function login(){
    //     navi("/")
    // }
  return(
 <>

<div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="canvas-close">
            <i class="fa fa-close"></i>
        </div>
        <div class="canvas-search search-switch">
        <IconButton color="warning">
                  <Badge badgeContent={1} color="secondary">
                    <a href={"cart"}><ShoppingCart /></a>
                    {/* <Link to="/cart">
                      <ShoppingCart />
                    </Link> */}
                  </Badge>
                </IconButton>   
        </div>
        <nav class="canvas-menu mobile-menu">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/contact'>About Us</a></li>
                <li><a href="/classes">Classes</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/team">Trainers</a></li>
                <li><a href="/user"></a>Products</li>
                <li><a href='/gallery'>Gallery</a></li>
                <li><a href="/cart">MyCart</a></li>
                <li><a href="#">Pages</a>
                    <ul class="dropdown">
                        <li><a href="bmi">Bmi calculate</a></li>
                        <li><a href="/adminLogin">Admin</a></li>
                        <li><a href="/plans">Our Plans</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap">
     
        </div>
        <div class="canvas-social">
        {/* <Button color="success"> <LoginOutlined /></Button> */}

        {uemail ?  
(<Button color="success" onClick={logout}>LogOut<LogoutOutlined /></Button>) 
:(<Button color="success">LogIn<LoginOutlined /></Button>)}
        
       
        

            {/* <a href="https://www.linkedin.com/in/dalip-divaker-077a021b5/?originalSubdomain=in"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a> */}
        </div>
    </div>
    {/* <!-- Offcanvas Menu Section End --> */}
       
        {/* <!-- Header Section Begin --> */}
    <header class="header-section">
        <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3">
                    <div class="logo">
                        <a href="/">
                            <img className="text-flicker-in-glow" src={logo} alt=""/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="nav-menu">
                        <ul>
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="/aboutUs">About Us</a></li>
                            <li><a href="/classes">Classes</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/team">Trainers</a></li>
                            <li><a href="/user">Products</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/cart">MyCart</a></li>
                            <li><a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><a href="/bmi">Bmi calculate</a></li>
                                    <li><a href="/plans">Our Plans</a></li>
                                    <li><a href="/adminLogin">Admin</a></li>
                                </ul>
                            </li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    {/* search */}
                    <div class="top-option">
                        <div class="to-search search-switch">
                        <IconButton color="warning">
                  <Badge badgeContent={1} color="secondary">
                  <a href={"cart"}><ShoppingCart /></a>

                    {/* <Link to="/cart">
                      <ShoppingCart />
                    </Link> */}
                  </Badge>
                </IconButton>
                        </div>
                        <div class="to-social">
                        {uemail ?  
(<Button color="success" onClick={logout}>LogOut<LogoutOutlined /></Button>) 
:(<Button color="success">LogIn<LoginOutlined /></Button>)}
                            {/* <Button color="success"> LogIn <LoginOutlined /></Button> */}
                            {/* <Button color="error" onClick={logout}> LogOut <LogoutOutlined /></Button> */}

                            {/* <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="canvas-open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    {/* <!-- Header End --> */}

   



</>
  );
}
export default Navbar