import SearchIcon from "./assets/icons/search-icon.svg?react";
import NikeBlazer from "./assets/images/NikeBlazer-img.png";
import NikeBlazerWhite from "./assets/images/NikeBlazerWhite-img.png";
import NikeAirMax from "./assets/images/NikeAirMax-img.png";
import PumaX from "./assets/images/PumaX-img.png";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const cards = [
  {
    id: 1,
    img: NikeBlazer,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 руб",
  },
  {
    id: 2,
    img: NikeAirMax,
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999 руб",
  },
  {
    id: 3,
    img: NikeBlazerWhite,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499 руб.",
  },
  {
    id: 4,
    img: PumaX,
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8 999 руб.",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block ">
            <SearchIcon />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
