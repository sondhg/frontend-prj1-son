import ModalCreateOrder from "./ModalCreateOrder";
import "./ManageOrder.scss";
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import {
  getAllOrders,
  getOrderWithPaginate,
} from "../../../../services/apiServices";
import "react-toastify/dist/ReactToastify.css";
import TableOrders from "./TableOrders";
import ModalUpdateOrder from "./ModalUpdateOrder";
import ModalDeleteOrder from "./ModalDeleteOrder";
import TableOrdersPaginate from "./TableOrdersPaginate";

const ManageOrder = (props) => {
  const LIMIT_ORDER = 6;
  const [showModalCreateOrder, setShowModalCreateOrder] = useState(false);
  const [showModalUpdateOrder, setShowModalUpdateOrder] = useState(false);
  const [showModalDeleteOrder, setShowModalDeleteOrder] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});

  const [listOrders, setListOrders] = useState([]);

  const fetchListOrders = async () => {
    let res = await getAllOrders();
    console.log(res);
    setListOrders(res); //xem database để đặt thêm sau res
  };

  // const fetchListOrdersWithPaginate = async (page) => {
  //   let res = await getOrderWithPaginate(page, LIMIT_ORDER);
  //   console.log(res);
  //   setListOrders(res); //xem database để đặt thêm sau res
  // };

  const handleClickBtnUpdate = (order) => {
    setShowModalUpdateOrder(true);
    setDataUpdate(order);
    console.log(">>> update order ", order);
  };

  const handleClickBtnDelete = (order) => {
    setShowModalDeleteOrder(true);
    console.log(">>> delete order: ", order);
    setDataDelete(order);
  };

  // const handleClickBtnProceed = (order) => {
  //   setShowModalProceedOrder(true);
  //   console.log(">>> proceed order: ", order);
  //   setDataProceed(order);
  // };

  useEffect(() => {
    fetchListOrders();
    //fetchListOrdersWithPaginate(1);
  }, []);

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
          <TableOrders
            listOrders={listOrders}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
            //handleClickBtnProceed={handleClickBtnProceed}
          />
          {/* <TableOrdersPaginate
            listOrders={listOrders}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
            handleClickBtnProceed={handleClickBtnProceed}
          /> */}
        </div>
        <ModalCreateOrder
          show={showModalCreateOrder}
          setShow={setShowModalCreateOrder}
          fetchListOrders={fetchListOrders}
        />
        <ModalUpdateOrder
          show={showModalUpdateOrder}
          setShow={setShowModalUpdateOrder}
          dataUpdate={dataUpdate}
          fetchListOrders={fetchListOrders}
        />
        <ModalDeleteOrder
          show={showModalDeleteOrder}
          setShow={setShowModalDeleteOrder}
          dataDelete={dataDelete}
          fetchListOrders={fetchListOrders}
        />
      </div>
    </div>
  );
};

export default ManageOrder;
