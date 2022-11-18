import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
function myNavbar(props) {

  return (
    <Navbar bg={props.mode}  expand="lg">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          <img src={require("../TextUtil Logo.png")} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{props.title}</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Form>
              <Form.Check type="switch" onClick={props.toggleMode} id="custom-switch" label="Dark Mode" />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;

// Navbar.propTypes = {
//     title: propTypes.string,
//     aboutText: propTypes.string
// }

Navbar.defaultProps = {
  title: "Set title here",
};
