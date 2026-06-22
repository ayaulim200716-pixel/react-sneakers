import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://6a3637d3766b831960f90683.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6a3637d3766b831960f90683.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddedToCart = (obj) => {
    axios.post("https://6a3637d3766b831960f90683.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6a3637d3766b831960f90683.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
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
                items={items}
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
    </>
  );
}

export default App;
