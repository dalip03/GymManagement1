import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase/firebase";
import Navbar from "../Navbar";
import firebase from "firebase";
import { Button } from "@mui/material";

function Cart() {
  const [data, setdata] = useState([]);

  function getcart() {
    db.collection("myCart")
      .doc(auth.currentUser.email)
      .collection("Cart")
      .onSnapshot((succ) => {
        // var ar = [];
        // succ.forEach((abc) => {
        //   ar.push(abc);
        // });
        // setdata(ar);

        var ar = [];
        succ.forEach((abc) => {
          ar.push(abc);
          console.log(abc.data());
        });
        setdata(ar);
      });
  }

  useEffect(() => {
    getcart();
  }, []);

  function incre(x) {
    // var idd = x.id;
    // console.log(idd);
    // db.collection("Products")
    //   .doc(product)
    //   .collection("mycart")
    //   .doc(idd)
    //   .update({
    //     Qty: firebase.firestore.FieldValue.increment(1),
    //   });
  }

  function decre(x) {
    // var idd = x.id;
    // console.log(idd);
    // db.collection("Products")
    //   .doc(product)
    //   .collection("mycart")
    //   .doc(idd)
    //   .update({
    //     Qty: firebase.firestore.FieldValue.increment(-1),
    //   });
  }

  function del(x) {
    // var idd = x.id;
    // console.log(idd);
    // db.collection("Products")
    //   .doc(product)
    //   .collection("mycart")
    //   .doc(idd)
    //   .delete()
    //   .then((succ) => {
    //     alert("Deleted");
    //   });
  }

  return (
    <>
      <Navbar />
      {/* <!-- Breadcrumb Section Begin --> */}
      <section class="breadcrumb-section set-bg-cart">
        <div class="container">
          <div class="val">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb-text">
                <h2> My Cart </h2>
                <div class="bt-option">
                  <a href="/">Home</a>
                  <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* cart page  > */}
      <section class="classes-section classes-page spad">
        <div class="container">
          <div class="val rw">
            <div className="papr col-lg-12 col-md-12 col-sm-12">
              {data.map((val) => (
                <div className="dv col-lg-12 col-md-4 col-sm-6">
                  <div className="box">
                    <img className="ig" src={val.data().Image} />
                    {/* // <img className="ig" /> */}
                  </div>

                  {/* df */}

                  <div className="btn btn-group btn1">
                    <Button 
                     variant="outlined"
                    className="btnd" onClick={() => incre(val)}>
                      +
                    </Button>

                    <Button 
                     variant="outlined"
                    className="btnd" disabled>
                      {val.data().Qty}
                    </Button>

                    {val.data().Qty <= 1 ? (
                      <button className="btnd">
                        <span
                          className="glyphicon glyphicon-trash"
                          onClick={() => del(val)}
                        ></span>
                      </button>
                    ) : (
                      <Button 
                      variant="outlined"
                      className="btnd" onClick={() => decre(val)}>
                        -
                      </Button>
                    )}
                  </div>

                  {/* c */}

                  <h4 className="h">{val.data().Name}</h4>
                  <p className="p">{val.data().Quantity}&nbsp;kg</p>
                  <p className="price">&#x20b9;{val.data().Price}</p>
                  <div className="cdv">
                    <Button
                      className="btnd"
                      type="button"
                      variant="contained"
                      color="primary"
                    >
                      <span onClick={() => del(val)}>Remove From Cart</span>
                    </Button>
                  </div>
                </div>
               
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
