import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsJson from "../js/data.json";
import { Card } from "react-bootstrap";
import Footer from "./check";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../index.css";
function Detail() {
  const { id } = useParams();

  const [data, setData] = useState("");
  console.log("check", data);

  useEffect(() => {
    setData(ProductsJson.find((_data) => String(_data.id) === id));
  }, [id]);

  console.log(data);
  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5 p-4 checking-info ">
          <Card>
            <Card.Img variant="top" src={data.image} className="detail-image" />
          </Card>
          <Card>
            <Card.Text>
              <h5>{data.title}</h5>

              <h5 className="mt-3">{data.price} usd </h5>
              <br />
              <p>Type</p>

              <div class="btn-group " role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn btn-outline-primary border-dark me-2 detail-button-color"
                >
                  Print 10x15cm
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary  border-dark me-2 detail-button-color"
                >
                  Print A4
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primar border-dark me-2 detail-button-color"
                >
                  Original 30x20cm
                </button>
              </div>

              <Form className="detail-input mt-4">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    class="btn btn-outline-primary border-dark detail-button-color"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary border-dark detail-button-color"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary border-dark detail-button-color"
                  >
                    +
                  </button>
                </div>

                <Button className="me-2 bg-dark border-0 ms-2 ">
                  Add to cart{" "}
                </Button>
              </Form>
              <p className="mt-5">{data.description}</p>
            </Card.Text>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
