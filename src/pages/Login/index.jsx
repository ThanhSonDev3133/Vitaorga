import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../assets/img/logoVitaorga.png";
export default function Login() {
  const [userLogin, setuserLogin] = useState({ userName: "", passWord: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserLogin({
      ...userLogin,
      [name]: value,
    });
    console.log("userLogin", userLogin);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (
      userLogin.userName === "thanhson" &&
      userLogin.passWord === "thanhson123"
    ) {
      alert("Đăng nhập thành công");
      navigate("/");
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
      window.location.reload();
    } else {
      alert("Đăng nhập không thành công");
      return;
    }
  };

  return (
    <section className="form-sign-in-up">
      <div className="img-logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="form-sign-in">
        <form onSubmit={handleLogin}>
          <div className="text-login">
            <span>Xin mời Đăng Nhập!</span>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-username">Tên Đăng Nhập</label>
            <div className="form-input">
              <i class="fa fa-user"></i>
              <input
                type="text"
                name="userName"
                onChange={handleChange}
                value={userLogin.userName}
                className="form-control"
                placeholder="Nhập tên đăng nhập"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="sign-in-pass">Mật Khẩu</label>
            <div className="form-input">
              <i class="fa fa-lock"></i>
              <input
                name="passWord"
                type="password"
                onChange={handleChange}
                value={userLogin.passWord}
                className="form-control"
                placeHolder="Nhập mật khẩu"
              />
            </div>
          </div>
          <div className="remember-login">
            <div className="remember">
              <i class="fa fa-check-square"></i>
              <span>Ghi nhớ tài khoản</span>
            </div>
            <div className="ask-remember">
              <i></i>
              <span>Quên mật khẩu?</span>
            </div>
          </div>
          <button type="submit" className="btn">
            Đăng nhập
          </button>
          <div className="mt-4 form-signup-link">
            <NavLink to="/signup" className='nav-link-signup'>
              Chưa Có Tài Khoản? <span>Đăng Kí</span>
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}
