import { useState, useContext } from "react";
import ArrowlIcon from "../../assets/icons/arrow-icon.svg?react";
import CancelIcon from "../../assets/icons/cancel-icon.svg?react";
import AppContext from "../../context";
import { useCart } from "../hooks/useCart";
import styles from "./Drawer.module.scss";

import Info from "../Info";
export default function Drawer({ onRemove, onClose, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState();

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${opened ? styles.overlayVisible : " "}`}
      >
        <div className={styles.drawer}>
          <h2 className="mb-30 d-flex justify-between  align-center">
            Корзина <CancelIcon className="removebtn cu-p" onClick={onClose} />
          </h2>

          {items.length > 0 ? (
            <>
              <div className="items">
                {items.map((obj) => (
                  <div
                    key={obj.id}
                    className="cartItem d-flex align-center mb-20"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${obj.img})`,
                      }}
                      className="cartItemImg"
                    ></div>
                    <div className="mr-20">
                      <p className="mb-5">{obj.name}</p>
                      <b>{obj.price}</b>
                    </div>
                    <button className=" button removebtn">
                      <CancelIcon onClick={() => onRemove(obj.id)} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>{totalPrice} руб. </b>
                  </li>
                  <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>{(totalPrice / 100) * 5} руб. </b>
                  </li>
                </ul>
                <button className="greenBtn" onClick={onClickOrder}>
                  <ArrowlIcon className="btnIcon" />
                  Оформить заказ
                </button>
              </div>
            </>
          ) : (
            <Info
              title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
              desc={
                isOrderComplete
                  ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
              }
              img={
                isOrderComplete
                  ? "/src/assets/icons/order-icon.svg"
                  : "/src/assets/images/emptybox-img.png"
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
