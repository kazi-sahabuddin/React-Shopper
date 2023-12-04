import product_data from "../assets/new_collections";
import styles from "../styles/NewCollections.module.css";
import Item from "./Item";
const NewCollections = () => {
  return (
    <div className={styles["new-collections"]}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={styles.collections}>
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

export default NewCollections;
