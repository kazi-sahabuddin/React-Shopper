/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "../styles/Item.module.css";
const Item = (props) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${props.id}`}>
        {" "}
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt="product image"
        />
      </Link>
      <p>{props.name}</p>
      <div className={styles["item-prices"]}>
        <div className={styles["item-price-new"]}>${props.new_price}</div>
        <div className={styles["item-price-old"]}>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
