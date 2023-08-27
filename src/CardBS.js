import React from "react";
import { Button, Card, Badge } from "react-bootstrap";

function CardBS() {
  return (
    <div>
      <h3>
        favourite liveries of all time <Badge bg="secondary">2023</Badge>
        <br />
      </h3>
      <br /> <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Ayrton_Senna_1991_Monaco.jpg"
          variant="top"
        />
        <Card.Body>
          <Card.Title>McLaren MP4/6</Card.Title>
          <Card.Text>
            All cars with Marlboro looks great, but on this McLaren it's just
            perfect, also like Honda logo fitting
          </Card.Text>
          <Button variant="primary">Read More...</Button>
        </Card.Body>
      </Card> 
      <br /> <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Kubica_BMW_F1.09.jpg"
          variant="top"
        />
        <Card.Body>
          <Card.Title>BMW F1.09</Card.Title>
          <Card.Text>
          I know this car was awful, but there is something that makes me love this livery; everything looks clean and nice, and this composition of dark blue and white is great.
          </Card.Text>
          <Button variant="primary">Read More...</Button>
        </Card.Body>
      </Card> 
      <br /> <br />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src="https://www.wallpaperup.com/uploads/wallpapers/2017/01/17/1074612/a554ffc1f8b0c0ce9af9b672f653c7c8-500.jpg"
          variant="top"
        />
        <Card.Body>
          <Card.Title>Lotus 72</Card.Title>
          <Card.Text>
          Absolute classic, probably my favourite composition of colours from all F1 cars
          </Card.Text>
          <Button variant="primary">Read More...</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardBS;
