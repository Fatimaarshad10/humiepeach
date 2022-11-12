import React from "react";
import "../index.css";
function Commissions() {
  return (
    <>
      <div className="bg-img2 mt-5 ">
        <div class="container ">
          <div class="row row-cols-3 row-cols-lg-5 g-3 g-lg-4 ms-auto">
            <div class="col ms-auto">
              <h5 class="text-white fw-bold ">Shop</h5>
              <ul class="list-unstyled mb-0">
                <li>
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
              </ul>
            </div>
            <div class="col ms-4">
              <h5 class="text-white fw-bold ">Service and support</h5>

              <ul class="list-unstyled mb-0 ">
                <li>
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
            </div>

            <div class="col ms-auto">
              <h5 class="text-white fw-bold">Other</h5>

              <ul class="list-unstyled mb-0">
                <li>
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
            </div>
            <div class="col ms-2">
              <h5 class="text-white fw-bold ">Contact me</h5>

              <ul class="list-unstyled mb-0">
                <li>
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
                    className="maestro"
                  />
                  <img
                    src="https://thumb.tildacdn.com/tild6333-3037-4636-b366-373239306562/-/resize/80x/-/format/webp/visa.png"
                    alt="visa"
                    className="visa"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commissions;
