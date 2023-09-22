import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Cardhero from "./components/Cardhero";
import Hero from "./components/Hero";
import NavbarMain from "./Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import smartphone from "./smartphone.png";

import "./App.css";

function Home() {
  return (
    <>
      <header className="header-nav" fixed="top">
        <Row>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link className="header-item" href="/">
                  <img src={smartphone} className="b-header" alt="logo" />
                  Download Aplikasi
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link className="header-item" href="/">
                  Tentang Kami
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="header-item" href="/">
                  Jadi Mitra
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="header-item" href="/">
                  Bantuan
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </header>
      <NavbarMain />
      <Hero />
      <Cardhero />
      <footer className="bg bg-dark site-footer">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h6>ABOUT</h6>
              <p className="p-footer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                excepturi, assumenda repudiandae fugit aut optio. Dolore unde,
                cum eius voluptas sapiente eveniet vel commodi tempora nostrum
                quod asperiores hic assumenda.
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h6>CATEGORIES</h6>
              <ul className="footer-links">
                <li>satu</li>
                <li>dua</li>
                <li>tiga</li>
                <li>empat</li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h6>QUICK LINKS</h6>
              <ul className="footer-links">
                <li>coba</li>
                <li>try</li>
                <li>try</li>
                <li>coba</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container>
          <Row>
            <Col md={8} sm={6} xs={12}>
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by <a href="#">SKD</a>
              </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <ul className="social-icons">
                <li>co</li>
                <li>ba</li>
                <li>co</li>
                <li>ba</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Home;
