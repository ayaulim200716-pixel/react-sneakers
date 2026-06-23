import SearchIcon from "../assets/icons/search-icon.svg?react";
import CancelIcon from "../assets/icons/cancel-icon.svg?react";
import Card from "../components/Card/Card";
import AppContext from "../context";
import React from "react";

export default function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddedToCart,
  isLoading,
}) {
  const { isItemAdd } = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        {...item}
        onPlus={(obj) => onAddedToCart(obj)}
        added={isItemAdd(item && item.id)}
        loading={isLoading}
      />
    ));
  };

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

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
