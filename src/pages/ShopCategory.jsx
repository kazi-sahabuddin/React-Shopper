/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "../styles/ShopCategory.module.css";
import { ShopContext } from "../contexts/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../componets/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={styles["shop-category"]}>
      <img
        className={styles["shopcategory-banner"]}
        src={banner}
        alt="Banner image"
      />
      <div className={styles["shopcategory-index-sort"]}>
        <p>
          <span>Showing 1-12</span> out fo 36 products
        </p>
        <div className={styles["shopcategory-sort"]}>
          Sort by <img src={dropdown_icon} alt="icons" />
        </div>
      </div>

      <div className={styles["all-products"]}>
        <div className={styles["shopcategory-products"]}>
          {all_product.map((item, index) => {
            if (category === item.category) {
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
            } else {
              return null;
            }
          })}
        </div>

        <div className={styles.loadmore}> Explore more</div>
      </div>
    </div>
  );
};

export default ShopCategory;
