import PlusIcon from "../../assets/icons/plus-icon.svg?react";
import LikeIcon from "../../assets/icons/like-icon.svg?react";
import AddedIcon from "../../assets/icons/added-icon.svg?react";
import styles from "./Card.module.scss";
import { useState } from "react";

export default function Card({ img, name, price, onPlus }) {
  const [isAdded, setIsAdded] = useState(true);

  const onClickPlus = () => {
    onPlus({ img, name, price });
    setIsAdded(!isAdded);
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
          <button className={styles.button} onClick={onClickPlus}>
            {isAdded ? <PlusIcon /> : <AddedIcon className={styles.added} />}
          </button>
        </div>
      </div>
    </>
  );
}
