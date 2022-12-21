import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar';
import { db } from '../Firebase/firebase';

function Client(){

  const [data, setdata] = useState([])
  function getissbook() {
      var ar = []
      db.collection('Clients').onSnapshot((succ) => {
          succ.forEach((abc) => {
              ar.push(abc)
              console.log(abc.data())
          })
          setdata(ar)
      })
  }
  useEffect(() => {
      getissbook()
  }, [])

    return(
        <>
        <AdminNavbar />
         {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Clients</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* clients list  > */}
      <section class="classes-section classes-page spad">
        <div class="container">
          <div class="row rw">

          <div className="col-lg-12 fm2">
       <div className="col-lg-12 adf2">
       <div className='hda'><h1 style={{color:'white'}}>Clients</h1></div>

       <Table  className='anmol'>
                            <TableHead >
                                <TableRow>
                                    <TableCell style={{color:'white'}}><b>Name</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Mobile</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Email</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Address</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Blood</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>batch</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((val) => (
                                    <TableRow>
                                        <TableCell style={{color:'white'}}>{val.data().Name}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Mobile}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Email}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Address}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Blood}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Batch}</TableCell>
                                
                                    </TableRow>
                                 ))} 
                            </TableBody>
                        </Table>
      </div>
      {/* end form 2 */}
      </div>
          </div>
          </div>
          </section>
        </>
    );
}

export default Client;