import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./Application.jsx";
import Home from "./components/Home/Home.jsx";
import FetchData from "./components/FetchData.jsx";
import NotFound from "./components/NotFound.jsx";
import ManageOrder from "./components/Manage/ManageOrder.jsx";
import Admin from "./components/Admin/Admin.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  document.title = "AGV UI";
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Application />}>
              <Route index element={<Home />} />
              <Route path="output" element={<FetchData />} />
              <Route path="manage" element={<ManageOrder />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
