import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";
function OffcanvasExample() {
  return (
    <>
    <div className="col-lg-12 col-md-12 col-12">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              className="h-100 text-center main-navbar "
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto mt-2  fw-bolder">
                  <Nav.Link href="/Shop">Shop</Nav.Link>

                  <Nav.Link className="mx-2 nav-link" href="/commission">
                    Commissions
                  </Nav.Link>
                  <Nav.Link className="mx-2 " href="/delivery">
                    Delivery
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="/About">
                    About
                  </Nav.Link>
                  <Nav.Link className="mx-2" href="/Contacts">
                    Contacts
                  </Nav.Link>
                </Nav>
                <Nav className="fw-bolder  mx-5">
                  <Nav.Link className="me-3 " href="/guide">
                    <Button className="fw-bold text-white navbar-button ">
                      Buy e-guide
                    </Button>
                  </Nav.Link>
                  <Nav.Link className="me-1 mt-2" href="/english">
                    English
                  </Nav.Link>
                  <Nav.Link className="mt-2" href="/pyccknn">
                    Русский
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}

export default OffcanvasExample;
