import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-toastify/dist/ReactToastify.css";
import { type } from "@testing-library/user-event/dist/type";
import "../../notify/index";
import { Color, error, success, warning } from "../../notify/index";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      error("email adresinizi girmelisiniz!!"); //notify
      toast.error("email field is requred", {
        //toast
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      warning("lütfen geçerli bir mail adresi giriniz");
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      error("şifrenizi girmelisiniz!!"); //notify
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      warning("şifreniz 5 karakterden uzun olmalı");
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Giriş Yap</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Mail Adresinizi Giriniz"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Şifrenizi Giriniz"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Giriş Yap
              </Button>
            </Form>
            <p className="mt-3">
              Hesabınız Yok mu ? <a href="/register">Kayıt Olun</a>
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
