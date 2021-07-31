const CartResults = ({ subTotal, deliveryFees, total }) => {
  return (
    <>
      <div className="Cart--results">
        <div className="Cart--result-line">
          <span className="Cart--result-name">Sous-total</span>
          <span className="Cart--amount">
            {subTotal.toFixed(2).replace(".", ",")} €
          </span>
        </div>
        <div className="Cart--result-line">
          <span className="Cart--result-name">Frais de livraison</span>
          <span>{deliveryFees.toFixed(2).replace(".", ",")} €</span>
        </div>
      </div>
      <div className="Cart--total">
        <span className="Cart--result-name">Total</span>
        <span className="Cart--amount">
          {total.toFixed(2).replace(".", ",")} €
        </span>
      </div>
    </>
  );
};

export default CartResults;
