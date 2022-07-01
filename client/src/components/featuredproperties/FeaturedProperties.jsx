import React from "react";
import "./featureproperties.css";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="" className="fpImg"
        />
        <span className="fpName">Appartment</span>
        <span className="fpCIty">Madrid</span>
        <span className="fpPrice"> start from $100</span>
        <span className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </span>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="" className="fpImg"
        />
        <span className="fpName">Appartment</span>
        <span className="fpCIty">Madrid</span>
        <span className="fpPrice"> start from $100</span>
        <span className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </span>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt="" className="fpImg"
        />
        <span className="fpName">Appartment</span>
        <span className="fpCIty">Madrid</span>
        <span className="fpPrice"> start from $100</span>
        <span className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </span>
      </div> 
    </div>
  );
};

export default FeaturedProperties;
