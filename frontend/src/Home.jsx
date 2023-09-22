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

import "./App.css";

function Home() {
  return (
    <>
      <header className="header-nav">
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
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={brand}
              width="30"
              height="30"
              className="d-inline-block align-top b-logo"
            />{" "}
            React Bootstrap
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
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      <Cardhero />
    </>
  );
}

export default Home;
