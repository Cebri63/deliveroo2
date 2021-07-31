import React from "react";
import "./RestaurantInfosLoader.css";

const RestaurantInfosLoader = () => {
  return (
    <div className="RestaurantInfosLoader">
      <div className="RestaurantInfosLoader--center">
        <div className="RestaurantInfosLoader--texts">
          <div className="RestaurantInfosLoader--title" />
          <div className="RestaurantInfosLoader--description" />
        </div>
        <div className="RestaurantInfosLoader--cover" />
      </div>
    </div>
  );
};

export default RestaurantInfosLoader;
