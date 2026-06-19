import PlusIcon from "../../assets/icons/plus-icon.svg?react";
import LikeIcon from "../../assets/icons/like-icon.svg?react";
import styles from "./Card.module.scss";

export default function Card(props) {
  const { name, img, price } = props;
  const onClickButton = () => {
    alert(name);
  };
  return (
    <>
      <div className={styles.card}>
        <div className={styles.like}>
          <LikeIcon />
        </div>
        <img src={img} alt="NikeBlazer" />
        <h5>{name}</h5>
        <div className="cardBottom d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <button className="button" onClick={onClickButton}>
            <PlusIcon />
          </button>
        </div>
      </div>
    </>
  );
}
