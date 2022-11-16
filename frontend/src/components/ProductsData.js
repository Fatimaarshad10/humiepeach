import React, { useState } from "react";
import ProductsJson from "../js/data.json";
import { Card } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import "../index.css";
import SearchIcon from "../images/search.png";
import { Link } from "react-router-dom";
function ProductsData() {
  const [searchList, setSearchList] = useState("");

  console.log(searchList);
  return (
    <>
     <div class="container">
  <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-5">
         <div className="d-none d-md-block  ">
            <select className="form-select-sm select  ">
              <option>Availability</option>
              <option value="2">Only in stock</option>
            </select>
            <select className=" form-select-sm select ">
              <option value="1">Price</option>
            </select>
            <select className="form-select-sm select  ">
              <option value="1">Tag</option>
              <option value="2">Old</option>
              <option value="3">Prints</option>
              <option value="4">Waterclour</option>
            </select>
            </div>
          <InputGroup className="input ms-auto">
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
       
        
          <Form.Select className="input2 ms-4 p-1">
            <option >Sort: by default</option>
            <option value="1">Price: low to high</option>
            <option value="2">Price: high to low</option>
            <option value="3">Title: A--Z</option>
            <option value="3">Title: Z--A</option>
            <option value="3">Sort: newest first</option>
            <option value="3">Sort: oldest first</option>
          </Form.Select>
        
      
        </div>
        </div> 
        <div className="danger-container text-center">
  
  {ProductsJson.filter((val) => {
            if (searchList === " ") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchList.toLowerCase())
            ) {
              return val;
            }
          }).map((data) => (
        <div >
        <Card key={data.id}  className='danger-card '>
          <Card.Img
            variant="top"
            src={data.image}
            className=" danger-image rounded-0"
            
          />
          <Card.Body  class="overlay">
            <h6 className="heading-portrait ">{data.title}</h6>
            <Link to={`/Watercolour/product/${data.id}`} class="text">
              <Button className='bg-dark border-0'>Detail</Button>
               
             </Link>
         <Card.Text className="text-portrait ">
              {data.price} usd

            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  ))}
 </div>
         <div className="text-center mt-5 mb-3">
    <Button className="fw-bold center-button">Load more</Button>
  </div>
    </>
  );
}

export default ProductsData;
