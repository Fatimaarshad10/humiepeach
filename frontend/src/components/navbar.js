import TopNavbar from "./MainNavbar";
import MdNavbar from "./navbar2";
import Info from "./info";
import ProductsData from "./ProductsData";
import Footer from "./footer";
import Acrylic from './acrylic'
import "../App.css";
function BasicExample() {
  return (
    <>
      <div className="bg-img ">
        <div>
          <TopNavbar />
        </div>
       
        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mx-auto ">
          <img
            className="img-fluid "
            src="https://static.tildacdn.com/tild3039-3665-4939-b335-363731646332/noroot.png"
            alt="humiedpeach"
          />
        </div>
      </div>
      <MdNavbar/>
    <Info/>
   <ProductsData/>
  
    </>
  );
}

export default BasicExample;
