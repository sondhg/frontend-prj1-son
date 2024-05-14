import ModalCreateOrder from "./ModalCreateOrder";
import "./ManageOrder.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageOrder = (props) => {
  const [showModalCreateOrder, setShowModalCreateOrder] = useState(false);

  return (
    <div className="manage-order-container">
      <div className="title">Manage Order</div>
      <div className="orders-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateOrder(true)}
          >
            <FcPlus />
            Add new order
          </button>
        </div>
        <div className="table-orders-container">
          table orders
          <ModalCreateOrder
            show={showModalCreateOrder}
            setShow={setShowModalCreateOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
