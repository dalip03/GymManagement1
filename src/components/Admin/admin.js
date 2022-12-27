import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { auth, db, storage } from "../Firebase/firebase";
import firebase  from "firebase";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

function Admin() {

  var navi = useNavigate()
  const [img, setimg] = useState("")
  const [name, setname] = useState("")
  const [quantity, setquantity] = useState("")
  const [price, setprice] = useState("")
  const [type, settype] = useState("")

const add = (e) => {
    var st_ref = storage.ref("/Products/" + img.name).put(img);
    st_ref.then(function (succ) {
      st_ref.snapshot.ref.getDownloadURL().then(function (suc) {
        db.collection("Products")
          .add({
            Name: name,
            Type: type,
            Quantity: quantity,
            Price: price,
            Image:suc,
            TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            
          })
          .then(function (sic) {
            alert("Product Added");
            e.target.reset();
});
      });
    });
  };


  // fetch data 

  
  const [data, setdata] = useState([])
  function getproducts() {
      var ar = []
      db.collection('Products').onSnapshot((succ) => {
          succ.forEach((abc) => {
              ar.push(abc)
              console.log(abc.data())
          })
          setdata(ar)
      })
  }
  useEffect(() => {
      getproducts()
  }, [])

  return (
    <>
      <AdminNavbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2>ADMIN</h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <Add product form > */}
      <section class="classes-section classes-page spad">
        <div class="container">
          <div class="row rw">
            <div className="col-lg-6 adf">
            <div className=" col-lg-12 adform">
              {/* <form className=" col-lg-12 adform"> */}
                <div className="form-group">
                  <h1>Add Products</h1>
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    // value={img}
                    name="img"
                    className=" form-control"
                    placeholder="Product Image*"
                    onChange={(e) => setimg(e.target.files[0])}                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={name}
                    className="  form-control"
                    placeholder="Product Name*"
                    onChange={(e) => setname(e.target.value)}

                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={quantity}
                    className=" form-control"
                    placeholder="Quantity*" 
                    onChange={(e) => setquantity(e.target.value)}

                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={price}
                    className=" form-control"
                    placeholder=" Price"
                    onChange={(e) => setprice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <select className="form-control" 
                  value={type}     
                   onChange={(e) => settype(e.target.value)}
>
                    <option  value={"type"}> Types </option>
                    <option value={"Pre  Workout"}> Pre Workout </option>
                    <option value={"Protien"}> Protien</option>
                    <option value={"Mass Gainer"}> Mass Gainer</option>
                    <option value={"Carnitine"}> Carnitine</option>
                    <option value={"Shaker"}> Shaker</option>
                  </select>
                </div>
                <div className="form-group">
                        <button onClick={add} className="btn btn-primary form-control">
                         Add Product
                        </button>
                </div>
                </div>
              {/* </form> */}
              </div>

 
{/* form 2 */}
<div className="col-lg-12 fm2">
       <div className="col-lg-12 adf2">
       <Table  className='anmol'>
                            <TableHead >
                                <TableRow>
                                    <TableCell style={{color:'white'}}><b>Image</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Name</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Quantity</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Price</b></TableCell>
                                    <TableCell style={{color:'white'}}><b>Type</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((val) => (
                                    <TableRow>
                                        {/* <TableCell style={{color:'white'}}>{val.data().Image}</TableCell> */}
                                       <TableCell  style={{height:'50px'}}><img style={{height:50}} src={val.data().Image} className=" img-responsive" /></TableCell> 
                                        <TableCell style={{color:'white'}}>{val.data().Name}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Quantity}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Price}</TableCell>
                                        <TableCell style={{color:'white'}}>{val.data().Type}</TableCell>
                                
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

export default Admin;
