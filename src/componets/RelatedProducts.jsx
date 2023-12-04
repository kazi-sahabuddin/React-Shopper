import styles from "../styles/RelatedProducts.module.css";
import data_product from "../assets/data";
import Item from "../componets/Item";
const RelatedProducts = () => {
  return (
    <div className={styles["related-product"]}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles["related-products-item"]}>
        {data_product.map((item, index) => {
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

export default RelatedProducts;
