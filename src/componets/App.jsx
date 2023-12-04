import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import LoginSignup from "../pages/LoginSignup";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import ShopCategory from "../pages/ShopCategory";
import Footer from "./Footer";
import Navbar from "./Navbar";
import men_banner from "../assets/banner_mens.png";
import women_banner from "../assets/banner_women.png";
import kid_banner from "../assets/banner_kids.png";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kid_banner} category="kid" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
