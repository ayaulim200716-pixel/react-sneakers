import LogoIcon from "./assets/icons/logo-icon.svg?react";
import CartIcon from "./assets/icons/cart-icon.svg?react";
import LikeIcon from "./assets/icons/like-icon.svg?react";
import ProfileIcon from "./assets/icons/profile-icon.svg?react";
import PlusIcon from "./assets/icons/plus-icon.svg?react";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <LogoIcon className="svg" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <CartIcon />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <LikeIcon />
            <span>Закладки</span>
          </li>
          <li className="mr-30">
            <ProfileIcon />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img src="/src/assets/images/NikeBlazer-img.png" alt="NikeBlazer" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/src/assets/images/NikeAirMax-img.png" alt="NikeBlazer" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src="/src/assets/images/NikeBlazerWhite-img.png"
              alt="NikeBlazerWhite"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/src/assets/images/PumaX-img.png" alt="Puma" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
