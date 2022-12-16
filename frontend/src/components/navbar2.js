import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";
function SecondNavbar() {
  return (
    <Navbar expand="lg" className="second-navbar">
      <Container>
        <Nav className="mx-auto text-center second-navbar-nav">
          <Link className=" mx-3 " to="/Watercolour">
           
            WATERCOLOUR
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/Pencil">
            PENCIL
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/Acrylic">
            ACRYLIC
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/Oil">
            OIL
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/Guides">
            GUIDES
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/Sketchbooks">
            SKETCHBOOKS
          </Link>
          <Link className=" mx-3 second-navbar-link" to="/Prints">
            PRINTS
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SecondNavbar;
