import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="text-center navbar2">
      <Container fluid>
        <Nav className="mx-auto my-2 my-lg-0 text-center middle-navbar">
          <Nav.Link className=" mx-2 " href="/Watercolour">
            WATERCOLOUR
          </Nav.Link>
          <Nav.Link className=" mx-2 " href="/Pencil">
            PENCIL
          </Nav.Link>
          <Nav.Link className=" mx-2" href="/Acrylic">
            ACRYLIC
          </Nav.Link>
          <Nav.Link className=" mx-2" href="/Oil">
            OIL
          </Nav.Link>
          <Nav.Link className=" mx-2" href="/Guides">
            GUIDES
          </Nav.Link>
          <Nav.Link className=" mx-2" href="/Sketchbooks">
            SKETCHBOOKS
          </Nav.Link>
          <Nav.Link className=" mx-2" href="/Prints">
            PRINTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
