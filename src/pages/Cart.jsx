import CartItems from "../componets/CartItems";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartItems />
    </div>
  );
};

export default Cart;
