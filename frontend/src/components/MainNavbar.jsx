import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";
import vk from '../images/vk.png'
import youtube from '../images/youtube.png'
import instagram  from '../images/insta.png'
import pinterest from '../images/pinterest.png'

function OffcanvasExample() {
  return (
    <>
    <div className="col-lg-12 col-md-12 col-12">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggle-1'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              className="h-100"
            >
              <Offcanvas.Header closeButton children >
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  className="offcanvas-main ">
                <Nav className="ms-auto mt-2  fw-bolder first-navbar ">
                <Nav.Link className="mx-2 first-navbar-block first-navbar-color" href="/guide">
                Buy my e-guide
                  </Nav.Link>
                  <Nav.Link href="/Shop" className="first-navbar-color" >Shop</Nav.Link>

                  <Nav.Link className="mx-2  first-navbar-color" href="/commission">
                    Commissions
                  </Nav.Link>
                  <Nav.Link className="mx-2 first-navbar-color" href="/delivery">
                    Delivery
                  </Nav.Link>
                  <Nav.Link className="mx-2 first-navbar-color" href="/About">
                    About
                  </Nav.Link>
                  <Nav.Link className="mx-2 first-navbar-color" href="/Contacts">
                    Contacts
                  </Nav.Link>
                </Nav>
                <Nav className="fw-bolder  mx-5  first-navbar ">
                  <Nav.Link className="me-3 " href="/guide ">
                    <Button className="fw-bold  first-navbar-button first-navbar-second-block ">
                      Buy e-guide
                    </Button>
                  </Nav.Link>

                  <Nav.Link className="me-1 mt-2 first-navbar-second-block " href="/english">
                    English
                  </Nav.Link>
                  <Nav.Link className="mt-2  first-navbar-second-block " href="/pyccknn">
                    Русский
                  </Nav.Link>
                 

                </Nav>
                
               
               <div className="mt-3">
                    <a href='https://vk.com/humidpeach' className="mx-2 first-navbar-block "><img src={vk} alt='vk'/>
                    
                    <a href='https://www.youtube.com/c/HumidPeach' className="mx-2 large-block"><img src={youtube} alt='youtube'/></a>
                    <a href='https://www.instagram.com/humid_peach/' className="mx-2 large-block"><img src={instagram} alt='youtube'/></a>
                    
                    <a href='https://ru.pinterest.com/humid_peach/' className="mx-2 large-block">
                  <img src={pinterest} alt='youtube'/>
                    </a>
                  

                    </a>
                    </div>

                 
                    <div className="mt-3 ">
                  <a className="me-1 mt-2  first-navbar-block  first-navbar-style" href="/english">
                    English
                  </a>
                  <a className="mt-2  first-navbar-block first-navbar-style" href="/pyccknn">
                    Русский
                  </a>
                  </div>
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
