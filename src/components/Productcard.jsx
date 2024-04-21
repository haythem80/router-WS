import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Productcard = ({ user }) => {
  return (
    <div>
      <Card style={{ margin: "20px" }} id="carte">
        <Card.Img variant="top" src={user.image} className="img" />
        <Card.Body>
          <Card.Title className="title">{user.name}</Card.Title>
          <Card.Text className="text">{user.price}</Card.Text>
        </Card.Body>
        <Link to={`/info/${user.id}`}>
          <Button variant="info">Info</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Productcard;
