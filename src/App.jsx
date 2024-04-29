import "./styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Instruction from "./components/Instruction.jsx";
import AddOrder from "./components/AddOrder.jsx";
import FetchData from "./components/FetchData.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  document.title = "AGV UI";
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Instruction />
              <AddOrder />
            </Route>
            <Route path="/output">
              <FetchData />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
