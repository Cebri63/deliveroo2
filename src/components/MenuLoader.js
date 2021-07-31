import React from "react";
import "./MenuLoader.css";

const MenuLoader = () => {
  return (
    <div className="MenuLoader">
      <div className="MenuLoader--group">
        <div className="MenuLoader--name" />
      </div>
      <div className="MenuLoader--items">
        <div className="MenuItem">
          <div className="MenuItem--card" />
        </div>
        <div className="MenuItem">
          <div className="MenuItem--card" />
        </div>
      </div>
    </div>
  );
};

export default MenuLoader;
