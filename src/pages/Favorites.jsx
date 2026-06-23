import { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";
export default function Favorites({ items }) {
  const { favorites } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card key={item.id} {...item} favorited={true} />
        ))}
      </div>
    </div>
  );
}
