import React from "react";
import "./Menu.css";
import MenuItems from "./MenuItems";

const Menu = (props) => {
  const { menu, addItem } = props;

  let nonEmptyCategories = menu.filter((elem) => elem.meals.length > 0);

  return (
    <div className="Menu">
      {nonEmptyCategories.map((elem, index) => {
        return (
          <MenuItems
            key={index}
            name={elem.name}
            items={elem.meals}
            addItem={addItem}
          />
        );
      })}
    </div>
  );
};

export default Menu;
