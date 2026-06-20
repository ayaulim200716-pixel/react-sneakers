import SearchIcon from "./assets/icons/search-icon.svg?react";
import CancelIcon from "./assets/icons/cancel-icon.svg?react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>
              {searchValue
                ? `Пойск по запросу: "${searchValue}"`
                : "Все кроссовки"}
            </h1>
            <div className="search-block">
              <SearchIcon />
              {searchValue && (
                <CancelIcon
                  className="clear"
                  onClick={() => setSearchValue(" ")}
                />
              )}
              <input
                placeholder="Поиск..."
                onChange={onChangeSearchInput}
                value={searchValue}
              />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .map((item) => (
                <Card
                  key={item.id}
                  {...item}
                  onPlus={(obj) => onAddedToCart(obj)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
