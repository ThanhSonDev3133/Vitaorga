import React from "react";
import "./index.css";
export default function CompleteProfile() {
  return (
    <div className="container">
      <header>Registration</header>
      <form action="#">
        <div className="form first">
          <div className="details personal">
            <span className="title">Personal Details</span>

            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input type="text" placeHolder="Enter your name" required />
              </div>

              <div className="input-field">
                <label>Date of Birth</label>
                <input type="date" placeHolder="Enter birth date" required />
              </div>

              <div className="input-field">
                <label>Email</label>
                <input type="text" placeHolder="Enter your email" required />
              </div>

              <div className="input-field">
                <label>Mobile Number</label>
                <input
                  type="number"
                  placeHolder="Enter mobile number"
                  required
                />
              </div>

              <div className="input-field">
                <label>Gender</label>
                <select required>
                  <option disabled selected>
                    Select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="input-field">
                <label>Occupation</label>
                <input
                  type="text"
                  placeHolder="Enter your ccupation"
                  required
                />
              </div>
            </div>
          </div>

          <div className="details ID">
            <span className="title">Identity Details</span>

            <div className="fields">
              <div className="input-field">
                <label>ID Type</label>
                <input type="text" placeHolder="Enter ID type" required />
              </div>

              <div className="input-field">
                <label>ID Number</label>
                <input type="number" placeHolder="Enter ID number" required />
              </div>

              <div className="input-field">
                <label>Issued Authority</label>
                <input
                  type="text"
                  placeHolder="Enter issued authority"
                  required
                />
              </div>

              <div className="input-field">
                <label>Issued State</label>
                <input type="text" placeHolder="Enter issued state" required />
              </div>

              <div className="input-field">
                <label>Issued Date</label>
                <input
                  type="date"
                  placeHolder="Enter your issued date"
                  required
                />
              </div>

              <div className="input-field">
                <label>Expiry Date</label>
                <input type="date" placeHolder="Enter expiry date" required />
              </div>
            </div>
            <div className="text-center mt-2">
              <button className="btn">
                <span className="btnText">Xác nhận</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
