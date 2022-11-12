import React from "react";
import Card from "react-bootstrap/Card";
import "../index.css";
function Pencil() {
  return (
    <div className="row mt-2">
      <div className="col-lg-4 col-md-9 col-sm-9 col-9 d-block m-auto me-4 mt-5 ">
        <Card className="ms-1 card">
          <Card.Img
            variant="top"
            src="https://thumb.tildacdn.com/tild6233-3763-4233-a165-333931646566/-/resize/800x/-/format/webp/___3.png"
          />
        </Card>
      </div>

      <div className="col-lg-5 col-md-12 col-sm-12 col-10 d-block m-auto mx-5 mt-5">
        <Card className="card text">
          <Card.Text>
            Hi! My name is Ksu, but you know me as Humid Peach{" "}
            <img
              src="https://thumb.tildacdn.com/tild3530-3931-4164-b363-346336636634/-/resize/60x/-/format/webp/___4.png"
              alt="icon"
            />
            <br />
            <br />
            Sorry, but I don't have any available payments method for <br />
            you now, only way is to use{" "}
            <a href="https://humidpeach.gumroad.com/l/pencil-portrait-e-guide">
              GUMROAD{" "}
            </a>
            ⬅️Click <br />
            <br />
            In this section you can buy my original artworks, old and <br />
            new. Some of items are available in printed version.
            <br />
            All my artworks are created with love! <br />
            I hope they will be able to please you and decorate your
            <br /> interior <br />
            <br />
            Enjoy watching and shopping!
          </Card.Text>
        </Card>
      </div>
    </div>
  );
}

export default Pencil;
