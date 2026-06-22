import PlusIcon from "../../assets/icons/plus-icon.svg?react";
import UnLikeIcon from "../../assets/icons/heartunliked-icon.svg?react";
import LikeIcon from "../../assets/icons/heartliked-icon.svg?react";
import AddedIcon from "../../assets/icons/added-icon.svg?react";
import styles from "./Card.module.scss";
import { useState } from "react";

export default function Card({ img, name, price, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ img, name, price });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className={styles.card}>
        <div onClick={onClickLike}>
          {isFavorite ? <LikeIcon /> : <UnLikeIcon />}
        </div>
        <img src={img} alt="NikeBlazer" />
        <h5>{name}</h5>
        <div className="cardBottom d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Цена:</span>
            <b>{price}</b>
          </div>
          <button className={styles.button} onClick={onClickPlus}>
            {isAdded ? <AddedIcon className={styles.added} /> : <PlusIcon />}
          </button>
        </div>
      </div>
    </>
  );
}
