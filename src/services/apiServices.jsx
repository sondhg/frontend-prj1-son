import axios from "../utils/axiosCustomize"; //axios này là hàm instance, cách đặt tên ko quan trọng
const postCreateNewOrder = (vehicleCode, startPoint, endPoint, quickNote) => {
  const form = new FormData();
  form.append("vehicleCode", vehicleCode);
  form.append("startPoint", startPoint);
  form.append("endPoint", endPoint);
  form.append("quickNote", quickNote);

  //order-draft là viết tắt của http://localhost:8081/orders-draft nhờ axiosCustomize.jsx
  return axios.post("orders-draft", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//cần phần headers thì mới chạy đc, vì json-server của mình ko hoạt động với formdata giống video

const getAllOrders = () => {
  return axios.get(
    "orders-draft" /* , {
    headers: {
      "Content-Type": "application/json",
    },
  } */
  );
};

const putUpdateOrder = (id, startPoint, endPoint, quickNote) => {
  const form = new FormData();
  //ko truyền vehicleCode vào props vì ta ko muốn người dùng edit trường đó khi update
  //cần truyền biến id để biết đang xét order nào
  form.append("id", id);
  form.append("startPoint", startPoint);
  form.append("endPoint", endPoint);
  form.append("quickNote", quickNote);

  return axios.put("orders-draft", form, {
    headers: {
      "Content-Type": "application/json", //cần database để sửa, có thể bỏ headers
    },
  });
};

const deleteOrder = (orderId) => {
  return axios.delete("orders-draft", { data: { id: orderId } });
};

const proceedOrder = (order) => {
  return axios.post("orderProceeded", order, {
    headers: {
      "Content-Type": "application/json",
    }, //biến order sẽ là 1 object, cần nghĩ cách post giống hàm postCreateNewOrder
  });
};

export default proceedOrder;

const getOrderWithPaginate = (page, limit) => {
  return axios.get(`orders-draft?page=${page}&limit=${limit}`); //đặt url trước dấu ?
};

const getDisplayAgvParams = () => {
  return axios.get("agv-display");
};
//có thể dùng cho TableDisplayAgvParams, nhưng code cũ chạy ổn r nên thôi

export {
  postCreateNewOrder,
  getAllOrders,
  putUpdateOrder,
  deleteOrder,
  proceedOrder,
  getOrderWithPaginate,
  getDisplayAgvParams,
};
