import "./styles.scss";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Instruction from "./components/Instruction.jsx";
import MyComponents from "./components/MyComponents.jsx";
import FetchData from "./components/FetchData.jsx";

function App() {
  document.title = "AGV UI";
  return (
    <>
      <Header />
      <Instruction />
      <MyComponents />
      <FetchData />
      <Footer />
    </>
  );
}

export default App;
