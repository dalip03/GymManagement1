import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { auth, db } from "../Firebase/firebase";

function Admin() {

  var navi = useNavigate()
                             

  const[img,setImg] = useState('')
  const[name,setName] =useState('')
  const[dec,setDec] =useState('')
  const[price,setPrice] =useState('')
  const[type,setType] =useState('')


  function add(e){
       e.preventDefault();
   db.collection('data').add(img, name, dec, price, type).then((succ)=>{
    alert(" data store ")
   })
  
    }
    

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
                    className=" form-control"
                    placeholder="Product Image*"
                    onChange={(e) => setImg(e.target.value)}
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="  form-control"
                    placeholder="Product Name*"
                    onChange={(e) => setName(e.target.value)}

                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className=" form-control"
                    placeholder="Description*"
                    onChange={(e) => setDec(e.target.value)}

                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className=" form-control"
                    placeholder=" Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <select className="form-control"      
                   onChange={(e) => setType(e.target.value)}
>
                    <option  value={"Shirt"}> Types </option>
                    <option value={"Pent"}> Pre Workout </option>
                    <option value={"Trouser"}> Protien</option>
                    <option value={"T-Shirt"}> Mass Gainer</option>
                    <option value={"Shoe"}> Carnitine</option>
                    <option value={"Aceesories"}> Shaker</option>
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Discription</th>
              <th>Price</th>
              <th>Type</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>

            {/* {data.map((row) => ( */}
            <tr >
              {/* <tr key={row.id}> */}
                <td className="imm">
                <img  className=" img-responsive" />

                  {/* <img src={row.data().Image} className=" img-responsive" /> */}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                {/* <td>{row.data().Name}</td>
                <td>{row.data().Description}</td>
                <td>{row.data().Price}</td>
                <td>{row.data().Type}</td>
                <td> */}
                  <button
                    className="btn btn-danger"
                    // onClick={() => del(row.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#mymodal"
                    // onClick={() => edit(row.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="mymodal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <button className="close" data-dismiss="modal">
                  x
                </button>
                <h2>edit form</h2>
              </div>
              <div className="modal-body">
                <form>
                {/* <form onSubmit={editform}> */}
                  <div className="form-group">
                    <input
                      type="file"
                      name="productImage"
                      className=" form-control"
                      placeholder="Product Image*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={0}
                      // value={nm}

                      name="productName"
                      className="  form-control"
                      placeholder="Product Name*"
                      // <form className=" col-lg-12 adform">
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="discription"
                      value={1}
                      // value={desc}
                      className=" form-control"
                      placeholder="Discription*"
                      // onChange={(e) => setdesc(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="Price"
                      value={10}
                      // value={price}
                      className=" form-control"
                      placeholder=" Price"
                      // onChange={(e) => setprice(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="Type"
                      value={1}
                      // value={type}
                      // onChange={(e) => settype(e.target.value)}
                    >
                      <option  value={"Shirt"}> Types </option>
                    <option value={"Pent"}> Pre Workout </option>
                    <option value={"Trouser"}> Protien</option>
                    <option value={"T-Shirt"}> Mass Gainer</option>
                    <option value={"Shoe"}> Carnitine</option>
                    <option value={"Aceesories"}> Shaker</option>
                    </select>
                  </div>
                  {/* <button type="button" className=" btn btn-success"> Submit </button> */}
                  <input
                    className=" btn btn-success"
                    type={"submit"}
                    value="edit form"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
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
