import { useState } from "react";
import AddOrder from "./AddOrder";
import DisplayOrder from "./DisplayOrder";


const MyComponents = (props) => {
  const [listOrders, setListOrders] = useState([
    { id: 0, vehicleCode: "johncena", startPoint: "A", endPoint: "A" },
  ]);

  const handleAddNewOrder = (orderObj) => {
    setListOrders([orderObj, ...listOrders]);
  };

  const handleDeleteOrder = (orderId) => {
    let listOrdersClone = listOrders;
    listOrdersClone = listOrdersClone.filter((item) => item.id !== orderId);
    setListOrders(listOrdersClone);
  };

  return (
    <>
      <br />
      <div className="a">
        <AddOrder handleAddNewOrder={handleAddNewOrder} />

        <DisplayOrder
          listOrders={listOrders}
          handleDeleteOrder={handleDeleteOrder}
        />
      </div>
    </>
  );
};

export default MyComponents;
