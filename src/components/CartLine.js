import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

const CartLine = ({ cartItem, removeItem, addItem }) => {
  return (
    <div className="Cart--line">
      <div className="Cart--counter">
        <span onClick={() => removeItem(cartItem)}>
          <MinusIcon size={20} />
        </span>
        <span>{cartItem.quantity}</span>
        <span onClick={() => addItem(cartItem)}>
          <PlusIcon size={20} />
        </span>
      </div>
      <span className="Cart--item-name">{cartItem.title}</span>
      <span className="Cart--amount">
        {(Number(cartItem.price) * cartItem.quantity)
          .toFixed(2)
          .replace(".", ",") + " €"}
      </span>
    </div>
  );
};

export default CartLine;
