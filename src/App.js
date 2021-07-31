import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";
import CartMinus from "./components/CartMinus";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const deliveryFees = 2.5;
  let subTotal = 0;
  cart.forEach((cartItem) => {
    subTotal += cartItem.price * cartItem.quantity;
  });

  const total = subTotal + deliveryFees;

  const addItem = (item) => {
    // console.log(item);
    // Créer une copie de cart
    const newCart = [...cart];
    // Est-ce que item existe déjà dans cart ?
    const exist = newCart.find((elem) => elem.id === item.id);
    // .find() renvoie un objet qui match avec la condition
    console.log("Le produit existe déjà, le voici : ", exist);
    // autre méthode : boucle for
    if (exist) {
      // incrémenter la quantité
      exist.quantity++;
      setCart(newCart);
    } else {
      // Modifier la copie (push item + une quantité)
      // item.quantity = 1
      // newCart.push(item)
      newCart.push({ ...item, quantity: 1 });
      // Mettre à jour le state cart avec la copie
      setCart(newCart);
    }
  };

  const removeItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    if (exist.quantity === 1) {
      // trouver l'index
      const index = newCart.indexOf(exist);
      // supprimer l'élément du tableau
      newCart.splice(index, 1);
      if (newCart.length === 0) {
        setCartVisible(false);
      }
    } else {
      exist.quantity--;
    }
    setCart(newCart);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-deliveroo-api.herokuapp.com"
      );

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <Content
        menu={data.categories}
        cart={cart}
        addItem={addItem}
        removeItem={removeItem}
        total={total}
        subTotal={subTotal}
        deliveryFees={deliveryFees}
        setCartVisible={setCartVisible}
      />
      {/* This cart will be display for 768px max-width screens */}
      <CartMinus
        cart={cart}
        addItem={addItem}
        removeItem={removeItem}
        total={total}
        subTotal={subTotal}
        deliveryFees={deliveryFees}
        cartVisible={cartVisible}
        setCartVisible={setCartVisible}
      />
    </div>
  );
};

export default App;
