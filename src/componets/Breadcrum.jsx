/* eslint-disable react/prop-types */
import styles from "../styles/Breadcrum.module.css";
import arrow_icon from "../assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className={styles.breadcrum}>
      HOME <img src={arrow_icon} alt=">" /> SHOP{" "}
      <img src={arrow_icon} alt=">" /> {product.category}{" "}
      <img src={arrow_icon} alt=">" /> {product.name}
    </div>
  );
};

export default Breadcrum;
