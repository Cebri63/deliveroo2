import React from "react";
import "./Header.css";
import TopBar from "./TopBar";
import RestaurantInfos from "./RestaurantInfos";
import RestaurantInfosLoader from "./RestaurantInfosLoader";

const Header = (props) => {
  const { restaurant } = props;

  return (
    <header className="Header">
      <TopBar />
      {restaurant === null ? (
        <RestaurantInfosLoader />
      ) : (
        <RestaurantInfos
          name={restaurant.name}
          description={restaurant.description}
          cover={restaurant.picture}
        />
      )}
    </header>
  );
};

export default Header;
