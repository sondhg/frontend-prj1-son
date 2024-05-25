import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  document.title = "AGV UI";
  return (
    <Provider store={store}>
      <div className="app-container">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
