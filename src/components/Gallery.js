import React from 'react'
import Navbar from './Navbar';

import gallery1 from '../Asset/img/gallery/gallery-1.jpg'
import gallery2 from '../Asset/img/gallery/gallery-2.jpg'
import gallery3 from '../Asset/img/gallery/gallery-3.jpg'
import gallery4 from '../Asset/img/gallery/gallery-4.jpg'
import gallery5 from '../Asset/img/gallery/gallery-5.jpg'
import Footer from './footer';
import GetInTouch from './getInTouch';


function Gallery(){
    return(
        <>
        <Navbar/>

        
    {/* <!-- Breadcrumb Section Begin --> */}
    <section class="breadcrumb-section set-bg-classes" data-setbg="img/breadcrumb-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>Gallery</h2>
                        <div class="bt-option">
                            <a href="/">Home</a>
                            <a href=".">Pages</a>
                            <span>Gallery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

   {/* <!-- Gallery Section Begin --> */}
<div class="gallery-section">
    <div class="gallery">
        <div class="grid-sizer"></div>
        <div class="gs-item grid-wide set-bg-gallery1">
        </div>
        <div class="gs-item set-bg-gallery2" >
        </div>
        <div class="gs-item set-bg-gallery3" >
        </div>
        <div class="gs-item set-bg-gallery4" >
        </div>
        <div class="gs-item set-bg-gallery5">
        </div>
        <div class="gs-item  set-bg-gallery6" >
        </div>
        <div class="gs-item  set-bg-gallery7" >
        </div>
        <div class="gs-item  set-bg-gallery8" >
        </div>
        <div class="gs-item  set-bg-gallery9" >
        </div>
        <div class="gs-item  set-bg-gallery10" >
        </div>
        <div class="gs-item  set-bg-gallery11" >
        </div>
        
    </div>
</div>
<GetInTouch/>
<Footer/>


        </>
    );
}

export default Gallery;