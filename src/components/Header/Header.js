import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar className="navbar" bg="dark" variant="dark">
        <div className="a">
        <Container className="container">
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            Ana Sayfa
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/login"
              className="text-decoration-none text-light mx-2"
            >
              Giriş Yap
            </NavLink>
            <NavLink to="/register" className="text-decoration-none text-light">
              Kayıt Ol
            </NavLink>
            <NavLink
              to="/details"
              className="text-decoration-none text-light mx-3"
            >
              Profilim
            </NavLink>
          </Nav>
        </Container>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
