import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cart_icon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";
import styles from "../styles/Navbar.module.css";
import { ShopContext } from "../contexts/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-logo"]}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles["nav-menu"]}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={styles["nav-login-cart"]}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className={styles["nav-cart-count"]}>{getTotalCartItem()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
