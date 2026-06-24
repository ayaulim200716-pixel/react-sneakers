import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import { createContext, useEffect, useState } from "react";
import axios, { create } from "axios";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://6a3637d3766b831960f90683.mockapi.io/items",
      );
      const itemsResponse = await axios.get(
        "https://6a3637d3766b831960f90683.mockapi.io/cart",
      );

      setIsLoading(false);

      setItems(itemsResponse.data);
      setItems(cartResponse.data);
    }

    fetchData();
  }, []);

  const onAddedToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id)),
      );
    } else {
      axios.post("https://6a3637d3766b831960f90683.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6a3637d3766b831960f90683.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isItemAdd = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdd,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened ? (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoading={isLoading}
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddedToCart={onAddedToCart}
              />
            }
          />
          <Route path="/favorites" element={<Favorites items={favorites} />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
