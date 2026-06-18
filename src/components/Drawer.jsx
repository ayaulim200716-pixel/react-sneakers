import CancelIcon from "../assets/icons/cancel-icon.svg?react";
import ArrowlIcon from "../assets/icons/arrow-icon.svg?react";
export default function Drawer() {
  return (
    <>
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between  align-center">
            Корзина <CancelIcon className="removebtn cu-p" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: "url(src/assets/images/NikeAirMax-img.png)",
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button className=" button removebtn">
                <CancelIcon />
              </button>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: "url(src/assets/images/PumaX-img.png)",
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
                <b>8 999 руб.</b>
              </div>
              <button className=" button removebtn">
                <CancelIcon />
              </button>
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenBtn">
              <ArrowlIcon className="btnIcon" />
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
