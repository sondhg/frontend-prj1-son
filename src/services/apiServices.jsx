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
  return axios.post("orders-proceeded", order, {
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
  return axios.get("agv-parameters-display");
};
//có thể dùng cho TableDisplayAgvParams, nhưng code cũ chạy ổn r nên thôi

//Phần dưới đây dùng cho User/Account
const postCreateNewUser = (email, password, username, role) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", username);
  form.append("role", role);

  return axios.post("users", form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getAllUsers = () => {
  return axios.get(
    "users" /* , {
    headers: {
      "Content-Type": "application/json",
    },
  } */
  );
};

const putUpdateUser = (id, password, username, role) => {
  const form = new FormData();
  //ko truyền vehicleCode vào props vì ta ko muốn người dùng edit trường đó khi update
  //cần truyền biến id để biết đang xét order nào
  form.append("id", id);
  form.append("password", password);
  form.append("username", username);
  form.append("role", role);

  return axios.put("users", form, {
    headers: {
      "Content-Type": "application/json", //cần database để sửa, có thể bỏ headers
    },
  });
};

const deleteUser = (userId) => {
  return axios.delete("users", { data: { id: userId } });
};

//Dưới đây là cho Login
const postLogin = (userEmail, userPassword) => {
  return axios.post(/* "/api/v1/login" */ "login", {
    email: userEmail,
    password: userPassword,
    delay: 5000,
  });
  //cần database của Hoàng Anh lấy được thông tin user từ http://localhost:8081/users
  //được thêm vào qua chức năng Manage User
};

const postRegister = (email, password, username) => {
  return axios.post(/* "api/v1/register" */ "register", {
    email,
    password,
    username,
  });
};

export {
  //AGV
  postCreateNewOrder,
  getAllOrders,
  putUpdateOrder,
  deleteOrder,
  proceedOrder,
  getOrderWithPaginate,
  getDisplayAgvParams,

  //User
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,

  //Login
  postLogin,

  //Register
  postRegister,
};


// const postCreateNewUser = (email, password, username, role) => {
//   const form = new FormData();
//   form.append("email", email);
//   form.append("password", password);
//   form.append("username", username);
//   form.append("role", role);
//   return axios.post("users", form);
// };

// const getAllUsers = () => {
//   return axios.get("users");
// };

// const putUpdateUser = (id, password, username, role) => {
//   const form = new FormData();
//   //ko truyền vehicleCode vào props vì ta ko muốn người dùng edit trường đó khi update
//   //cần truyền biến id để biết đang xét order nào
//   form.append("id", id);
//   form.append("password", password);
//   form.append("username", username);
//   form.append("role", role);

//   return axios.put("users", form,);
// };

// const deleteUser = (userId) => {
//   return axios.delete("users", { data: { id: userId } });
// };

// const postLogin = (userEmail, userPassword) => {
//   return axios.post("/api/v1/login", {
//     email: userEmail,
//     password: userPassword,
//     delay: 5000, //chỉ để tạo thanh loading
//   });
// };

// const postRegister = (email, password, username) => {
//   return axios.post("api/v1/register", {
//     email,
//     password,
//     username,
//   });
// };
