import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featureproperties.css";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?feautred=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCIty">{item.city}</span>
              <span className="fpPrice"> start from ${item.cheapestPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
