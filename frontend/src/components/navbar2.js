import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="second-navbar">
      <Container fluid>
        <Nav className="mx-auto text-center second-navbar-nav">
          <Nav.Link className="mx-1  " href="/Watercolour" >
            WATERCOLOUR
          </Nav.Link>
          <Nav.Link className=" mx-1 " href="/Pencil">
            PENCIL
          </Nav.Link>
          <Nav.Link className=" mx-1  " href="/Acrylic">
            ACRYLIC
          </Nav.Link>
          <Nav.Link className=" mx-1  " href="/Oil">
            OIL
          </Nav.Link>
          <Nav.Link className=" mx-1 " href="/Guides">
            GUIDES
          </Nav.Link>
          <Nav.Link className=" mx-1 " href="/Sketchbooks">
            SKETCHBOOKS
          </Nav.Link>
          <Nav.Link className=" mx-1" href="/Prints">
            PRINTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
