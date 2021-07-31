import React from "react";
import "./Cart.css";
import NonEmptyCart from "./NonEmptyCart";

const Cart = (props) => {
  const {
    cart,
    addItem,
    removeItem,
    subTotal,
    deliveryFees,
    total,
    setCartVisible,
  } = props;
  const empty = cart.length === 0;

  return (
    <div className="Cart">
      <div className="Cart--card">
        <button className={"Cart--validate" + (empty ? " Cart--disabled" : "")}>
          Valider mon panier
        </button>
        {empty ? (
          <div className="Cart--empty">Votre panier est vide</div>
        ) : (
          <NonEmptyCart
            cart={cart}
            addItem={addItem}
            removeItem={removeItem}
            subTotal={subTotal}
            deliveryFees={deliveryFees}
            total={total}
            setCartVisible={setCartVisible}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
