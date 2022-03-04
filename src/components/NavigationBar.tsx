import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";

interface props {}

const NavigationBar: React.FC<props> = ({}) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <img src={logo} width="40px" height="40px"></img>
        Poll-It
      </Navbar.Brand>
      <Nav className="container-fluid">
        <Nav.Item>
          <Nav.Link>About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item className="ms-auto">
          <Nav.Link>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Sign-Up</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
