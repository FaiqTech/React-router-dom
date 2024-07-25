import { Card, CardBody, CardHeader, CardText, Col } from "reactstrap";
import { CardTitle } from "reactstrap";
import React from "react";
import data from "./data.json";
import { Container, Row } from "reactstrap";

function Services() {
  console.log(data);

  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col sm={12} md={5} key={item.id}>
            <Card>
              <CardHeader>{item.name}</CardHeader>
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.id}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
