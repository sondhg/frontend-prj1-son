//import "./styles.scss";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer.jsx";
//import "bootstrap/dist/css/bootstrap.min.css";

//Application nằm trong App
function Application() {
  document.title = "AGV UI";
  return (
    <div className="app-container">
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <div className="side-nav-container"></div>
          <div className="app-content">
            <Outlet />
          </div>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Application;