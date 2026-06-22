import SearchIcon from "../assets/icons/search-icon.svg?react";
import CancelIcon from "../assets/icons/cancel-icon.svg?react";
import Card from "../components/Card/Card";

export default function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddedToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Пойск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <SearchIcon />
          {searchValue && (
            <CancelIcon className="clear" onClick={() => setSearchValue(" ")} />
          )}
          <input
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
            value={searchValue}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((item) => (
            <Card
              key={item.id}
              {...item}
              onPlus={(obj) => onAddedToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}
