import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import { data } from 'jquery';
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../AdminNavbar';
import { db } from '../Firebase/firebase';

function Trainers(){

  const [data, setdata] = useState([])
  function getissbook() {
      var ar = []
      db.collection('Trainers').onSnapshot((succ) => {
          succ.forEach((abc) => {
              ar.push(abc)
              console.log(abc.data())
          })
          setdata(ar)
      })
  }
  
//   db.collection("Clients")
//   .orderBy("Date", "desc")
//   .onSnapshot((succ) => {
//       //from here
//       setclient(
//           succ.docs.map((item) => ({
//               data: item.data(),
//               id: item.id,
//           }))
//       );
//   });
// }


  useEffect(() => {
      getissbook()
  }, [])


  // searching start

//   const [search, setSearch] = useState(""); //first step
//   const [searchData, setSearchData] = useState([]); //second step

//   const[client, setclient] = useState()
    
//   const getSearchClient = () => {
//     if (search) {
//         const newData = client.filter((item) => {
//             const textData = search.toLowerCase();
//             if (item.data.Name.toLowerCase().startsWith(textData)) {
//                 return item;
//             } else if (item.data.Lname.toLowerCase().startsWith(textData)) {
//                 return item
//             }
//             else if (item.data.Subscription.toLowerCase().startsWith(textData)) {
//                 return item
//             }
            
//             else {
//                 return null
//             }
//         });
//         setSearchData(newData);
//         console.log(newData);
//     } else {
//         setSearchData([]);
//         console.log("no data");
//     }
// };

//sixth step
// useEffect(() => {
//     getSearchClient();
// }, [search]);

  // end search

    return(
        <>
        <AdminNavbar />
         {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>Trainers</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Trainers</span>
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
       <div className='col-lg-12 hda'><h1 style={{color:'white'}}>Trainers</h1>
            <div className='col-lg-10 '>
              <TextField
                        id="text-field"
                        placeholder="Search"
                        variant="outlined"
                        size="large"
                        className="srch"
                        // onChange={(e) => setSearch(e.target.value)}
                    />
                     </div></div> 
      


       <Table  className='anmol'>
                            <TableHead >
                                <TableRow>
                                    <TableCell style={{color:'white'}}><b>First Name</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Last Name</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Mobile</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Email</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Address</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Blood</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Date Of Joining</b></TableCell>
                                    {/* <TableCell style={{color:'white'}}><b>Subscription</b></TableCell> */}
                                    <TableCell style={{color:'white'}}><b>Height</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Weight</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>batch</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((val) => (
                                    <TableRow>
                                        <TableCell style={{color:'white'}}>{val.data().Name}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Lname}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Mobile}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Email}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Address}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Blood}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Date}</TableCell>
                                        {/* <TableCell style={{color:'white'}}>{val.data().Subscription}</TableCell> */}
                                        <TableCell style={{color:'white'}}>{val.data().Height}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Weight}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Batch}</TableCell>

                                    </TableRow>
                                 ))} 
                            </TableBody>

{/* <TableBody>
                                {search
                                    ? searchData.map((val) => (
                                      <TableRow>
                                      <TableCell style={{color:'white'}}>{val.data().Name}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Lname}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Mobile}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Email}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Address}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Blood}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Date}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Subscription}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Height}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Weight}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Batch}</TableCell>

                                  </TableRow>
                                    ))
                                    : data.map((val) => (
                                      <TableRow>
                                      <TableCell style={{color:'white'}}>{val.data().Name}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Lname}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Mobile}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Email}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Address}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Blood}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Date}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Subscription}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Height}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Weight}</TableCell>
                                      <TableCell style={{color:'white'}}>{val.data().Batch}</TableCell>

                                  </TableRow> */}
                                    {/* ))}
                            </TableBody> */}

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

export default Trainers;