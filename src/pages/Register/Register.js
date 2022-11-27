import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error, warning } from "../../notify";

const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
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

    const { name, email, date, password } = inpval;

    if (name === "") {
      error(" İsim alanı boş bırakılamaz!!"); //notify
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      error(" Mail alanı boş bırakılamaz!!");
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      warning(" Geçerli bir mail adresi giriniz");
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (date === "") {
      error(" Tarih alanı boş bırakılamaz!!");
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      error(" Şifre alanı boş bırakılamaz!!");
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      warning(" Şifre alanı 5 karakterden büyük olmalı!!");
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      {" "}
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Kayıt Ol</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Adınızı Giriniz"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Mail Adresinizi Giriniz"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
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
                Kayıt Ol
              </Button>
            </Form>
            <p className="mt-3">
              Zaten Bir Hesabın Var Mı ?{" "}
              <span>
                <NavLink to="/login">Giriş Yap</NavLink>
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
