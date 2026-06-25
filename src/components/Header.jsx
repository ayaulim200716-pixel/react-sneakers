import LogoIcon from "../assets/icons/logo-icon.svg?react";
import CartIcon from "../assets/icons/cart-icon.svg?react";
import LikeIcon from "../assets/icons/like-icon.svg?react";
import ProfileIcon from "../assets/icons/profile-icon.svg?react";
import { Link } from "react-router-dom";
import { useCart } from "./hooks/useCart";

export default function Header(props) {
  const { totalPrice } = useCart();

  return (
    <>
      <header className="d-flex justify-between align-center p-40">
        <Link to={"/"} className="d-flex align-center">
          <LogoIcon className="svg" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </Link>
        <ul className="d-flex">
          <li className="mr-30 " onClick={props.onClickCart}>
            <CartIcon className="mr-10 " />
            <span>{totalPrice} руб</span>
          </li>
          <li className="mr-30">
            <Link to={"/favorites"}>
              <LikeIcon className="mr-10" />
            </Link>
            <span>Закладки</span>
          </li>
          <Link to={"/orders"} className="mr-30">
            <ProfileIcon className="mr-10" />
            <span>Профиль</span>
          </Link>
        </ul>
      </header>
    </>
  );
}
