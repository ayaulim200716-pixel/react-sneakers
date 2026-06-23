import PlusIcon from "../../assets/icons/plus-icon.svg?react";
import UnLikeIcon from "../../assets/icons/heartunliked-icon.svg?react";
import LikeIcon from "../../assets/icons/heartliked-icon.svg?react";
import AddedIcon from "../../assets/icons/added-icon.svg?react";
import styles from "./Card.module.scss";
import { useState } from "react";
import ContentLoader from "react-content-loader";

export default function Card({
  id,
  img,
  name,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, img, name, price });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className={styles.card}>
        {loading ? (
          <ContentLoader
            speed={0}
            width={400}
            height={311}
            viewBox="0 0 400 311"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="4" y="3" rx="10" ry="10" width="150" height="90" />
            <rect x="4" y="105" rx="3" ry="3" width="150" height="15" />
            <rect x="6" y="124" rx="4" ry="4" width="95" height="13" />
            <rect x="6" y="149" rx="8" ry="8" width="79" height="24" />
            <rect x="116" y="139" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
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
                {isAdded ? (
                  <AddedIcon className={styles.added} />
                ) : (
                  <PlusIcon />
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
