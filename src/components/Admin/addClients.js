import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Navbar from '../Navbar'

export default function AddClients() {


   

    return (
        <>
          <AdminNavbar />
           {/* <!-- Breadcrumb Section Begin --> */}
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
          <div class="dva col-lg-4">
        {/* <form> */}
            <h2>Add Clients</h2>
            <div class="form-group">
                <input class="form-control" id="nm" type="text" placeholder="Enter Your Name* "/>
            </div>
            <div class="form-group">
                <input class="form-control" id="tl" type="tel" placeholder="Enter Your whatsapp no.* "/>
            </div>
            <div class="form-group">
                <input class="form-control" id="eml" type="email" placeholder="Enter Your E-Mail* "/>
            </div>
            <div class="form-group">
                <input class="form-control" id="add" type="text" placeholder="Enter Your Address* "/>
            </div>
            <div class="form-group">
                <select className='form-control'>
                    <option >Blood Group</option> 
                    <option>A+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>B-</option>
                    <option>B+</option>
                    <option>A-</option>

                </select>
            </div> 
            <div class="form-group">
                <select className='form-control'>
                     <option >Batch</option> 
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>

                </select>
            </div>   

           
            <button class="bta form-control" onclick="get()">Submit</button>

        {/* </form> */}
    </div>


            </div>
          </div>
          </section>

        </>
    )
}