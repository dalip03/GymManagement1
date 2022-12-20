import React from 'react';
import AdminNavbar from './AdminNavbar';
import Navbar from './Navbar';


function User(){

   return(
      <>
      <AdminNavbar /> {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Add Clients</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Add clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      
      <section class="classes-section classes-page spad">
        <div class="container">
          <div class="row">
    <div className='col-lg-12 col-md-12 col-sm-12'>
           
           <div className='dv col-lg-2 col-md-4 col-sm-6'>
            <div className='box'>
                 <img className="ig"/>
                 </div>
                 <h4 className='h'>Product</h4>  
                 <p className='p'>vsdjh</p>
                 <p className='price'>4356 </p>
                 <div className='cdv'>
                 <button  className='btn btn-warning form-control crtb' > Add to Cart </button>
                 </div>
                 </div>
       
    </div>
    </div>
    </div>
    </section>
    </>
   );
}

export default User;