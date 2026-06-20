import SearchIcon from "./assets/icons/search-icon.svg?react";
import NikeBlazer from "./assets/images/NikeBlazer-img.png";
import NikeBlazerWhite from "./assets/images/NikeBlazerWhite-img.png";
import NikeAirMax from "./assets/images/NikeAirMax-img.png";
import PumaX from "./assets/images/PumaX-img.png";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6a3637d3766b831960f90683.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddedToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  return (
    <>
      <div className="wrapper clear">
        {cartOpened ? (
          <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-block ">
              <SearchIcon />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {items.map((item) => (
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
