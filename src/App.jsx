//import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import FetchData from "./components/FetchData.jsx";
import NotFound from "./components/NotFound.jsx";
import ManageOrder from "./components/NewHome/ManageOrder.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  document.title = "AGV UI";
  return (
    <div className="app-container">
      <BrowserRouter>
        <div>
          <Header />
          <div className="content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/output" element={<FetchData />} />
              <Route path="/manage" element={<ManageOrder />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
