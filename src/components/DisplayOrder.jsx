import { useEffect, useState } from "react";

const DisplayOrder = (props) => {
  const { listOrders } = props;
  const [isShowHideListOrder, setShowHideListOrder] = useState(true);

  const handleShowHideListOrder = () => {
    setShowHideListOrder(!isShowHideListOrder);
  };
  console.log(">>> call me render");
  useEffect(() => {
    if (listOrders.length === 0) {
      alert("There is currently no order for AGV");
    }
    console.log(">>>call me useEffect");
  }, [listOrders]);
  return (
    <div>
      <div>
        <button
          className="show-hide-btn"
          onClick={() => handleShowHideListOrder()}
        >
          <span>
            {isShowHideListOrder === true
              ? "Hide draft"
              : "Show draft"}
          </span>
        </button>
      </div>

      {isShowHideListOrder && (
        <>
          {listOrders.map((order) => {
            return (
              <div className="display-order-container">
                <div className="display-order-box" key={order.id}>
                  <div>
                    <h4>Order ID: #{order.id}</h4>
                    <ul>
                      <li>Vehicle code: {order.vehicleCode}</li>
                      <li>Start point: {order.startPoint}</li>
                      <li>End point: {order.endPoint}</li>
                    </ul>
                  </div>
                  <div>
                    <button
                      className="pressed-btn delete-btn"
                      onClick={() => props.handleDeleteOrder(order.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayOrder;
