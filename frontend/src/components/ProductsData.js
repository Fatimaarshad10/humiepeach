import React, { useState } from "react";
import ProductsJson from "../js/data.json";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../App.css";
import "../index.css";
import SearchIcon from "../images/search.png";
function ProductsData() {
  const [searchList, setSearchList] = useState("");
  console.log(searchList);
  return (
    <>
      <Row className="gx-5 mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto  me-5">
          <div>
            <select className="form-select-sm select">
              <option>Availability</option>
              <option value="2">Only in stock</option>
            </select>
            <select className=" form-select-sm select">
              <option value="1">Price</option>
            </select>
            <select className="form-select-sm select">
              <option value="1">Tag</option>
              <option value="2">Old</option>
              <option value="3">Prints</option>
              <option value="4">Waterclour</option>
            </select>
          </div>
        </div>
        <Col className="col-lg-2 col-md-3 col-sm-5 col-5 m-auto me-5 ">
          <InputGroup className="input ms-5 h-100  ">
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              className="input"
              onChange={(e) => setSearchList(e.target.value)}
            />
            <InputGroup.Text id="basic-addon2" className="select-Text">
              <img src={SearchIcon} alt="SearchIcon" className="search-icon" />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col className="col-lg-2 col-md-3 col-sm-5 col-5 m-auto ms-3 ">
          <Form.Select className="input Select-form">
            <option className="p-3">Sort: by default</option>
            <option value="1">Price: low to high</option>
            <option value="2">Price: high to low</option>
            <option value="3">Title: A--Z</option>
            <option value="3">Title: Z--A</option>
            <option value="3">Sort: newest first</option>
            <option value="3">Sort: oldest first</option>
          </Form.Select>
        </Col>
      </Row>
      <div className="container mt-3 ">
        <div className="
        
        row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
          {ProductsJson.filter((val) => {
            if (searchList === " ") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchList.toLowerCase())
            ) {
              return val;
            }
          }).map((data) => (
            <div className="col ">
              <div className="p-2 ">
                <Card key={data.id} >
                  <Card.Img
                    variant="top"
                    src={data.image}
                    className="hover-card-image"
                  />
                  <Card.Body className="text-center">
                    <h6 className="heading-portrait">{data.title}</h6>
                    <Card.Text className="text-portrait">
                      {data.price} usd
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-2 mb-3">
        <Button className="fw-bold center-button">Load more</Button>
      </div>
    </>
  );
}

export default ProductsData;
