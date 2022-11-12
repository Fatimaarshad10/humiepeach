import TopNavbar from "./MainNavbar";
import MdNavbar from "./navbar2";
import Info from "./info";
import ProductsData from "./ProductsData";
import Footer from "./footer";
import "../App.css";
function BasicExample() {
  return (
    <>
      <div class="bg-img ">
        <div>
          <TopNavbar />
        </div>
        <div className="col-lg-2 col-sm-2 col-4 mx-auto mb-4 ">
          <img
            className="img-fluid"
            src="https://static.tildacdn.com/tild3039-3665-4939-b335-363731646332/noroot.png"
            alt="humiedpeach"
          />
        </div>
        <div>
          <MdNavbar />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <ProductsData />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
