import CancelIcon from "../assets/icons/cancel-icon.svg?react";
import ArrowlIcon from "../assets/icons/arrow-icon.svg?react";
export default function Drawer({ onRemove, onClose, items = [] }) {
  return (
    <>
      <div className="overlay">
        <div className="drawer">
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
            </>
          ) : (
            <div className="cartEmpty d-flex align-center justify-center flex flex-column">
              <img
                src="/src/assets/images/emptybox-img.png"
                alt="emptycart"
                className="mb-20"
              />
              <h2>Корзина пустая</h2>
              <p className="">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button className="greenBtn" onClick={onClose}>
                <ArrowlIcon className="btnIcon2" />
                Вернуться назад
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
