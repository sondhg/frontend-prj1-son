import "./styles.scss";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import FetchData from "./components/FetchData.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  document.title = "AGV UI";
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/output" element={<FetchData />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
