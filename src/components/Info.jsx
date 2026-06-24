import AppContext from "../context";
import { useContext } from "react";
import ArrowlIcon from "../assets/icons/arrow-icon.svg?react";

const Info = ({ title, desc, img }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <>
      <div className="cartEmpty d-flex align-center justify-center flex flex-column">
        <img src={img} alt="emptycart" className="mb-20" />
        <h2>{title}</h2>
        <p className="">{desc}</p>
        <button className="greenBtn" onClick={() => setCartOpened(false)}>
          <ArrowlIcon className="btnIcon2" />
          Вернуться назад
        </button>
      </div>
    </>
  );
};

export default Info;
