import React from "react";
import "./Content.css";
import Cart from "./Cart";
import Menu from "./Menu";
import MenuLoader from "./MenuLoader";

const Content = (props) => {
  const {
    menu,
    cart,
    addItem,
    removeItem,
    total,
    subTotal,
    deliveryFees,
    setCartVisible,
  } = props;
  return (
    <div className="Content">
      <div className="Content--center">
        {menu === null ? (
          <MenuLoader />
        ) : (
          <Menu menu={menu} addItem={addItem} />
        )}
        <Cart
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          total={total}
          subTotal={subTotal}
          deliveryFees={deliveryFees}
          setCartVisible={setCartVisible}
        />
      </div>
    </div>
  );
};

export default Content;
