import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { warning } from "../../notify/index";
import "./Details.css";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        <h3>
          Bu sayfaya erişebilmeniz için giriş yapmalısınız!! giriş yapmak için{" "}
          <a href="/login"> tıklayınız.</a>
        </h3>
      ) : (
        <>
          <h1>Kullanıcı Sayfası / Profil</h1>
          <h1> Kullanıcı: {logindata[0].name}</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">AD</th>
                <th scope="col">MAIL</th>
                <th scope="col">DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{logindata[0].name}</td>
                <td>{logindata[0].email}</td>
                <td>{logindata[0].date}</td>
              </tr>
            </tbody>
          </table>
          <Button onClick={userlogout}>Çıkış Yap</Button>
          <br></br> <br></br>
          {/* {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish you many many happy returns of the day ! 🍰
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )} */}
        </>
      )}
    </>
  );
};

export default Details;
