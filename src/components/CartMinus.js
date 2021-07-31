import "./CartMinus.css";
import NonEmptyCart from "./NonEmptyCart";

const CartMinus = ({
  cartVisible,
  setCartVisible,
  cart,
  addItem,
  removeItem,
  subTotal,
  deliveryFees,
  total,
}) => {
  const numberOfProducts = () => {
    let totalOfProducts = 0;
    cart.forEach((elem) => (totalOfProducts += elem.quantity));
    return totalOfProducts;
  };
  return (
    <div className="Cart-minus-container">
      {cartVisible && cart.length > 0 && (
        <NonEmptyCart
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          subTotal={subTotal}
          deliveryFees={deliveryFees}
          total={total}
          setCartVisible={setCartVisible}
          modal
        />
      )}
      <button
        disabled={cart.length > 0 ? false : true}
        onClick={() => {
          cart.length > 0 && setCartVisible(true);
        }}
        style={{
          justifyContent:
            cartVisible || cart.length === 0 ? "center" : "space-between",
        }}
        className={`Cart-minus-button${cart.length === 0 ? "-disabled" : ""}`}
      >
        {cartVisible ? (
          <span>Valider mon panier</span>
        ) : (
          <>
            {cart.length > 0 && (
              <span className="Cart-minus-number-of-products">
                {numberOfProducts()}
              </span>
            )}
            <span>Voir le panier</span>
            {cart.length > 0 && <span>{total.toFixed(2)} €</span>}
          </>
        )}
      </button>
    </div>
  );
};

export default CartMinus;
