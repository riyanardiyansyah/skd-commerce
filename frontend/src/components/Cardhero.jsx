import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Component.css";
import bird from "./image/bird.png";
import chicken from "./image/chicken.png";
import cow from "./image/cow.png";
import duck from "./image/duck.png";
import goat from "./image/goat.png";
import rabbit from "./image/rabbit.png";
import sheep from "./image/sheep.png";
import buffalo from "./image/buffalo.png";

function Cardhero() {
  return (
    <Card className="mycard">
      <Card.Title>
        <h3>Kategori Produk</h3>
      </Card.Title>
      <Row xs={6} md={4} className="g-4">
        <Col>
          <a href="/detail" className="cardherf">
            <Card>
              <Card.Img variant="top" src={cow} />
              <Card.Body>
                <Card.Title>Sapi</Card.Title>
                <Card.Text hidden>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={bird} />
            <Card.Body>
              <Card.Title>Burung</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={goat} />
            <Card.Body>
              <Card.Title>kambing</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={duck} />
            <Card.Body>
              <Card.Title>Bebek</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={chicken} />
            <Card.Body>
              <Card.Title>Ayam</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={rabbit} />
            <Card.Body>
              <Card.Title>Kelinci</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={sheep} />
            <Card.Body>
              <Card.Title>Domba</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={buffalo} />
            <Card.Body>
              <Card.Title>Kerbau</Card.Title>
              <Card.Text hidden>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <h1>Hai</h1>
      </Row>
    </Card>
  );
}

export default Cardhero;
