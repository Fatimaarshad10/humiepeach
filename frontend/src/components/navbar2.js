import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="text-center navbar2">
      <Container fluid>
        <Nav className="mx-auto text-center style navbar-main3">
          <Nav.Link className=" mx-2  changing-navbar" href="/Watercolour" >
            WATERCOLOUR
          </Nav.Link>
          <Nav.Link className=" mx-2  changing-navbar" href="/Pencil">
            PENCIL
          </Nav.Link>
          <Nav.Link className=" mx-2  changing-navbar" href="/Acrylic">
            ACRYLIC
          </Nav.Link>
          <Nav.Link className=" mx-2  changing-navbar" href="/Oil">
            OIL
          </Nav.Link>
          <Nav.Link className=" mx-2  changing-navbar" href="/Guides">
            GUIDES
          </Nav.Link>
          <Nav.Link className=" mx-2  changing-navbar" href="/Sketchbooks">
            SKETCHBOOKS
          </Nav.Link>
          <Nav.Link className=" mx-2  changing-navbar" href="/Prints">
            PRINTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
