import React from 'react'
import '../Asset/css/style.css';
import '../Asset/css/barfiller.css';
import '../Asset/css/bootstrap.min.css';
import '../Asset/css/flaticon.css';
import '../Asset/css/font-awesome.min.css';
import '../Asset/css/magnific-popup.css';
import '../Asset/css/owl.carousel.min.css';
import '../Asset/css/slicknav.min.css';

import Navbar from './Navbar';
import Footer from './footer';

import gallery1 from '../Asset/img/gallery/gallery-1.jpg'
import gallery2 from '../Asset/img/gallery/gallery-2.jpg'
import gallery3 from '../Asset/img/gallery/gallery-3.jpg'
import gallery4 from '../Asset/img/gallery/gallery-4.jpg'
import gallery5 from '../Asset/img/gallery/gallery-5.jpg'
import services1 from '../Asset/img/services/services-1.jpg'
import services2 from '../Asset/img/services/services-2.jpg'
import services3 from '../Asset/img/services/services-3.jpg'
import services4 from '../Asset/img/services/services-4.jpg'
import Iframe from 'react-iframe';


// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import { Splide, SplideSlide } from '@splidejs/react-splide';


function Home(){
    return(
       <>
<Navbar/>



<Footer/>

       </>

    );
}

export default Home;