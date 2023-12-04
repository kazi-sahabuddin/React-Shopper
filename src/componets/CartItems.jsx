import { useContext } from "react";
import styles from "../styles/CartItems.module.css";
import { ShopContext } from "../contexts/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeToCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className={styles["cart-items"]}>
      <div className={styles["format-main"]}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, index) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={index}>
              <div className={`${styles.format} ${styles["format-main"]}`}>
                <img
                  src={item.image}
                  className={styles["product-icon"]}
                  alt=""
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <p className={styles.quantity}>{cartItems[item.id]}</p>
                <p>${cartItems[item.id] * item.new_price}</p>
                <img
                  className={styles["remove-icon"]}
                  src={remove_icon}
                  onClick={() => {
                    removeToCart(item.id);
                  }}
                  alt="*"
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className={styles["cart-down"]}>
        <div className={styles["cart-total"]}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles["cart-total-item"]}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles["cart-total-item"]}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles["cart-total-item"]}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className={styles["btn-proceed"]}>Proceed to checkout</button>
        </div>
        <div className={styles.promocode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={styles.promobox}>
            <input type="text" placeholder="PROMO CODE" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
