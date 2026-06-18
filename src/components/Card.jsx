import PlusIcon from "../assets/icons/plus-icon.svg?react";
import LikeIcon from "../assets/icons/like-icon.svg?react";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="like">
          <LikeIcon />
        </div>
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
    </>
  );
}
