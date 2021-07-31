import CartLine from "./CartLine";
import CartResults from "./CartResults";

const NonEmptyCart = ({
  cart,
  addItem,
  removeItem,
  subTotal,
  deliveryFees,
  total,
  modal,
  setCartVisible,
}) => {
  return (
    <div className="Cart-minus-cart-container">
      {modal && (
        <div
          onClick={() => setCartVisible(false)}
          className="Cart-minus-close-cart-modal"
        >
          X
        </div>
      )}
      <div className="Cart--items">
        {cart.map((cartItem) => {
          return (
            <CartLine
              key={cartItem.id}
              cartItem={cartItem}
              addItem={addItem}
              removeItem={removeItem}
            />
          );
        })}
      </div>
      <CartResults
        subTotal={subTotal}
        deliveryFees={deliveryFees}
        total={total}
      />
    </div>
  );
};

export default NonEmptyCart;
