import React from 'react'
import AdminNavbar from '../AdminNavbar';

function Client(){
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>whatsapp No.</th>
              <th>Email</th>
              <th>Address</th>
              <th>Blood Group</th>
              <th>Batch </th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>

            {/* {data.map((row) => ( */}
            <tr >
              {/* <tr key={row.id}> */}
              
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
                      name="name"
                      className=" form-control"
                      placeholder="Product Image*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={0}
                      // value={nm}

                      name="whatsapp"
                      className="  form-control"
                      placeholder="Product Name*"
                      // <form className=" col-lg-12 adform">
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
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
                      name="address"
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
                      name="blood"
                      value={1}
                      // value={type}
                      // onChange={(e) => settype(e.target.value)}
                    >
                      <option value={"group"}> Blood Groupx </option>
                      <option value={"A+"}> A+ </option>
                      <option value={"AB-"}> AB-</option>
                      <option value={"O+"}> O+</option>
                      <option value={"O-"}> O-</option>
                      <option value={"AB+"}> AB+</option>
                      <option value={"B-"}> B-</option>
                      <option value={"B+"}> B+</option>
                      <option value={"A-"}> A-</option>

                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="blood"
                      value={1}
                      // value={type}
                      // onChange={(e) => settype(e.target.value)}
                    >
                      <option value={"batch"}> Batch </option>
                      <option value={"Pent"}> Morning </option>
                      <option value={"Trouser"}> Afternoon</option>
                      <option value={"T-Shirt"}> Evening</option>
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

export default Client;