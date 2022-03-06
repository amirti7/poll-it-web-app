import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

interface props {}

const DemoDiv: React.FC<props> = ({}) => {
  return (
    <Container>
      <Row md={6}>
        <Col md={6}>
          <p
            style={{
              fontSize: "100px",
            }}
          >
            The Best way to gather information
          </p>
          <p
            style={{
              fontSize: "30px",
            }}
          >
            With Poll-It you can make the best Polls and publish them to a small
            and unique sample group created specficlly for your poll.
          </p>
          <Button size="lg" variant="outline-primary">
            Sign-Up
          </Button>
        </Col>
        <Col md={6}>
          <img src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/slider-dec.png"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default DemoDiv;
