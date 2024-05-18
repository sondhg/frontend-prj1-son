import axios from "../utils/axiosCustomize"; //axios này là hàm instance, cách đặt tên ko quan trọng
const postCreateNewOrder = (vehicleCode, startPoint, endPoint, quickNote) => {
  const form = new FormData();
  form.append("vehicleCode", vehicleCode);
  form.append("startPoint", startPoint);
  form.append("endPoint", endPoint);
  form.append("quickNote", quickNote);

  //order-sent là viết tắt của http://localhost:8081/orders-sent nhờ axiosCustomize.jsx
  return axios.post("orders-sent", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//cần phần headers thì mới chạy đc, vì json-server của mình ko hoạt động với formdata giống video

const getAllOrders = () => {
  return axios.get(
    "orders-sent" /* , {
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

  return axios.put("orders-sent", form, {
    headers: {
      "Content-Type": "application/json", //cần database để sửa, có thể bỏ headers
    },
  });
};

const deleteOrder = (orderId) => {
  return axios.delete("orders-sent", { data: { id: orderId } });
};

const getOrderWithPaginate = (page, limit) => {
  return axios.get(`orders-sent?page=${page}&limit=${limit}`); //đặt url trước dấu ?
};

export {
  postCreateNewOrder,
  getAllOrders,
  putUpdateOrder,
  deleteOrder,
  getOrderWithPaginate,
};
