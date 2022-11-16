import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <div className="bg-img2 mt-5 ">
    <Container >
      <Row md={4} className='row-cols-sm-2 row-cols-md-2 row-cols-2 '>
        <Col><ul class="list-unstyled mt-2 ">
                <li>
                <h5 class=" text-white fw-bold ">Shop</h5>
                  <a href="#!" class="text-white   text-decoration-none">
                    Watercolour
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white  text-decoration-none">
                    Acrylic
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white  text-decoration-none">
                    Oil
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white  text-decoration-none">
                    Pencil
                  </a>
                </li>
              </ul></Col>
        <Col >
          
        <ul class="list-unstyled mt-2">
                <li>
              <h5 class="text-white fw-bold ">Service and support</h5>

                  <a href="#!" className=" text-white text-decoration-none">
                    Delivery and payment
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white  text-decoration-none">
                    Return and Exchange
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white  text-decoration-none">
                    Public offer
                  </a>
                </li>
              </ul>
            
        </Col>
        <Col><ul class="list-unstyled mt-2 ">
                <li>
                <h5 class="text-white fw-bold">Other</h5>
                  <a href="#!" class="text-white  text-decoration-none">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white  text-decoration-none">
                    Commission
                  </a>
                </li>
              </ul>
           </Col>
        <Col>       <ul class="list-unstyled mt-2  value ">
                <li>
              <h5 class="text-white fw-bold ">Contact me</h5>

                  <a href="#!" class="text-white  text-decoration-none">
                    peach@humidpeach.com
                  </a>
                </li>

                <li>
                  <img
                    src="https://thumb.tildacdn.com/tild3536-3631-4231-b233-313133336639/-/resize/80x/-/format/webp/paypal.png"
                    className="paypal"
                    alt="paypal"
                  />
                  <img
                    src="https://thumb.tildacdn.com/tild3961-6461-4562-b135-643132666363/-/resize/80x/-/format/webp/mastercard.png"
                    alt="mastercard"
                    className="mastercard"
                  />
                  <img
                    src="https://thumb.tildacdn.com/tild3235-3362-4633-a165-306630363637/-/resize/80x/-/format/webp/maestro.png"
                    alt="maestro"
                    className="mastercard"
                  />
                  <img
                    src="https://thumb.tildacdn.com/tild6333-3037-4636-b366-373239306562/-/resize/80x/-/format/webp/visa.png"
                    alt="visa"
                    className="mastercard"
                  />
                </li>
              </ul>
           </Col>
      </Row>
    </Container>
    </div>
  );
}

export default RowColLayoutColWidthBreakpointExample;