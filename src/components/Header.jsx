import LogoIcon from "../assets/icons/logo-icon.svg?react";
import CartIcon from "../assets/icons/cart-icon.svg?react";
import LikeIcon from "../assets/icons/like-icon.svg?react";
import ProfileIcon from "../assets/icons/profile-icon.svg?react";

export default function Header(props) {
  return (
    <>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <LogoIcon className="svg" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 " onClick={props.onClickCart}>
            <CartIcon className="mr-10 " />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <LikeIcon className="mr-10" />
            <span>Закладки</span>
          </li>
          <li className="mr-30">
            <ProfileIcon className="mr-10" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
    </>
  );
}
