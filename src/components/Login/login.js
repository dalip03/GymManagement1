import "./login.css";
import React from "react";
import Navbar from "../Navbar";
function Login() {

	
  return (
    
	<>
      <div className="backgroundlog">
        <div className="col-lg-offset-7 col-md-offset-5 col-sm-offset-2  login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            />

            <label for="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label for="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label for="user" className="label">
                    Username
                  </label>
                  <input
                    required
                    id="user"
                    name="email"
                    type="text"
                    className="input"
                  />

                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Password
                  </label>
                  <input
                    name="password"
                    required
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
				  
                </div>
                <br />
                {/* <div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div> */}
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label for="tab-2" className="tab">
                    Register Now
                  </label>
                </div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label for="user" className="label">
                    Username
                  </label>
                  <input name="name" id="user" type="text" className="input" />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Password
                  </label>
                  <input
                    name="password"
                    id="pass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Mobile Number
                  </label>
                  <input
                    name="tel"
                    id="pass"
                    type="tel"
                    className="input"
                    data-type="number"
                  />
                </div>
                <div className="group">
                  <label for="pass" className="label">
                    Email Address
                  </label>
                  <input id="pass" name="email" type="text" className="input" />
                </div>
                <br />
                <div className="group">
                  <input type="submit" className="button" value="Sign Up" />
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
