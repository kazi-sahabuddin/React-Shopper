/* eslint-disable react/prop-types */
import styles from "../styles/ProductDisplay.module.css";
import star_icon from "../assets/star_icon.png";
import stat_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={styles["product-display"]}>
      <div className={styles["product-display-left"]}>
        <div className={styles["product-display-img-list"]}>
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
          <img src={product.image} alt="Product image" />
        </div>
        <div className={styles["product-display-img"]}>
          <img
            className={styles["product-display-img-main"]}
            src={product.image}
            alt="Product image"
          />
        </div>
      </div>
      <div className={styles["product-display-right"]}>
        <h1>{product.name}</h1>
        <div className={styles["product-display-right-star"]}>
          <img src={star_icon} alt="*" />
          <img src={star_icon} alt="*" />
          <img src={star_icon} alt="*" />
          <img src={star_icon} alt="*" />
          <img src={stat_dull_icon} alt="*" />
          <p>(122)</p>
        </div>
        <div className={styles["product-display-right-prices"]}>
          <div className={styles["product-display-right-price-old"]}>
            ${product.old_price}
          </div>
          <div className={styles["product-display-right-price-new"]}>
            ${product.new_price}
          </div>
        </div>
        <div className={styles["product-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          fuga, fugit, cumque dicta placeat quisquam non sint, velit molestias
          quasi consequatur. Necessitatibus ipsum vero iusto. Nihil omnis dolore
          quo optio.
        </div>
        <div className={styles["product-size"]}>
          <h3>Select Size</h3>
          <div className={styles["product-size-list"]}>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </div>
        <button
          className={styles["add-to-cart"]}
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD to cart
        </button>
        <p className={styles["product-category"]}>
          <span>Category: </span> {product.category} T-shirt Jacket
        </p>
        <p className={styles["product-category"]}>
          <span>Tags: </span> Modern Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
