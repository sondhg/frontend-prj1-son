import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./Application.jsx";
import Home from "./components/Home/Home.jsx";
import FetchData from "./components/FetchData.jsx";
import NotFound from "./components/NotFound.jsx";
import ManageOrder from "./components/Admin/Content/Manage/ManageOrder.jsx";
import Admin from "./components/Admin/Admin.jsx";
import DashBoard from "./components/Admin/Content/DashBoard.jsx";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageDisplayAgvParams from "./components/Admin/Content/Display/ManageDisplayAgvParams.jsx";

function App() {
  document.title = "AGV UI";
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Application />}>
              <Route index element={<Home />} />
              {/* <Route path="output" element={<FetchData />} /> */}

              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/admin" element={<Admin />}>
              <Route index element={<DashBoard />} />
              <Route path="manage-orders" element={<ManageOrder />} />
              <Route
                path="agv-params-display"
                element={<ManageDisplayAgvParams />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
