import { useContext, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import AppContext from "../context";

export default function Orders() {
  const { onAddedToCart } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function OrdersData() {
      try {
        const { data } = await axios.delete("/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        // alert("Error");
      }
    }
    OrdersData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((order, index) => (
          <Card key={index} {...order} loading={isLoading} />
        ))}
      </div>
    </div>
  );
}
