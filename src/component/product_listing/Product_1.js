import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Product1 from "../../assets/products_images/p1/Intex_Deluxe.jpg";
import "../product_listing/product_1.css";
function Product_1() {
  return (
    <div className="product">
      
      <div className="product__info">
        <p>Intex Deluxe Wall Mount Surface Skimmer</p>

        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="product__rating">
          <StarIcon className="starIcon__color" />
          <StarIcon className="starIcon__color" />
          <StarIcon className="starIcon__color" />
          <StarIcon className="starIcon__color" />
          <StarIcon className="starIcon__color" />
        </div>

        <img src={Product1} alt="" className="product__image" />

        <button className="product__button">Add to Basket</button>
      </div>
    </div>
  );
}

export default Product_1;
