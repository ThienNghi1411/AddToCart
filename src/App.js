import "./App.css";
import ProductPage from "./component/ProductPage/ProductPage";
import Navbar from "./component/Navbar/Navbar";
import Cart from "./component/CartPage/Cart";
import Login from "./component/RegisterPage/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login></Login>} />
          <Route exact path="/cart" element={<Cart></Cart>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
