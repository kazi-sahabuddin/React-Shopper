import offers_image from "../assets/exclusive_image.png";
import styles from "../styles/Offers.module.css";

const Offers = () => {
  return (
    <div className={styles["offers-wrapper"]}>
      <div className={styles.offers}>
        <div className={styles["offers-left"]}>
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className={styles["offers-right"]}>
          <img
            src={offers_image}
            alt="Offers image"
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
