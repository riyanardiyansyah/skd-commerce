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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={brand} className="b-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Form>
                  <Form.Group>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Search"
                      defaultValue="Search"
                    />
                  </Form.Group>
                </Form>
              </Nav.Link>
              <NavDropdown title="Kategori" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Daging Sapi
                </NavDropdown.Item>
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
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      <Cardhero />
    </>
  );
}

export default Home;
