import React from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

function Profile() {
  const { username } = useParams();

  if (!username) {
    return <Navigate to="/login" />;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card>
            <CardBody>
              <CardTitle tag="h2" className="text-center mb-4">
                Profil Səhifəsi
              </CardTitle>
              <CardText className="text-center">
                <strong>İstifadəçi:</strong> {username}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
