import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cardhero from "./components/Cardhero";
import Hero from "./components/Hero";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import smartphone from "./smartphone.png";
import brand from "./brand_skd.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";

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
      <Navbar className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={brand}
              width="30"
              height="30"
              className="d-inline-block align-top b-logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Form inline>
                <InputGroup>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup>
              </Form>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="vl">
              <Button href="/login" variant="outline-success">
                Login
              </Button>
              &nbsp;
              <Button href="/register" variant="btn btn-success">
                Register
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
