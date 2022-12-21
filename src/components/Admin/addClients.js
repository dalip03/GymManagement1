import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { db } from "../Firebase/firebase";
import firebase from "firebase";
import Navbar from "../Navbar";

export default function AddClients() {
  var navi = useNavigate();
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [blood, setblood] = useState("");
  const [batch, setbatch] = useState("");

  const addClient = (e) => {
    // var st_ref = Storage.ref("/Products/" + img.name).put(img);
    db.collection("Clients")
      .add({
        Name: name,
        Mobile: mobile,
        Email: email,
        Address: address,
        Blood: blood,
        Batch: batch,
        TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function (sic) {
        alert("Client Added");
        e.target.reset();
      });
  };

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
                <input
                  class="form-control"
                  id="nm"
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter Your Name* "
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="tl"
                  name="mobile"
                  onChange={(e) => setmobile(e.target.value)}

                  value={mobile}
                  type="tel"
                  placeholder="Enter Your whatsapp no.* "
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="eml"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}

                  value={email}
                  type="email"
                  placeholder="Enter Your E-Mail* "
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="add"
                  name="address"
                  onChange={(e) => setaddress(e.target.value)}

                  value={address}
                  type="text"
                  placeholder="Enter Your Address* "
                />
              </div>
              <div class="form-group">
                <select className="form-control" name="blood" 
                onChange={(e) => setblood(e.target.value)}
                value={blood}>
                  <option>Blood Group</option>
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
                <select className="form-control"
                  onChange={(e) => setbatch(e.target.value)}

                name="batch" value={batch}>
                  <option>Batch</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>

              <button
                onClick={addClient}
                className="btn btn-primary form-control"
              >
                Add Client
              </button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
