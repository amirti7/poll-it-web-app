import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PollItLogo from "../images/Logo.png";

const Image = styled.img`
  @media (max-width: 767px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 1200px) {
    width: 450px;
    height: 450px;
  }
`;

const Title = styled.p`
  font-size: 100px;

  @media (max-width: 460px) {
    font-size: 65px;
  }
`;

interface props {}

const DemoDiv: React.FC<props> = ({}) => {
  return (
    <div style={{ margin: "10px" }}>
      <Container>
        <Row md={6}>
          <Col md={6}>
            <Title
            //   style={{
            //     fontSize: "100px",
            //   }}
            >
              The Best way to gather information
            </Title>
            <p
              style={{
                fontSize: "30px",
              }}
            >
              With Poll-It you can make the best Polls and publish them to a
              small and unique sample group created specficlly for your poll.
            </p>
            <Button size="lg" variant="outline-primary">
              Sign-Up
            </Button>
          </Col>
          <Col md={6}>
            <Image src={PollItLogo}></Image>
            {/* <img src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/slider-dec.png"></img> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DemoDiv;
