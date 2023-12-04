import product_data from "../assets/data";
import styles from "../styles/Popular.module.css";
import Item from "./Item";

const Popular = () => {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles["popular-item"]}>
        {product_data.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
