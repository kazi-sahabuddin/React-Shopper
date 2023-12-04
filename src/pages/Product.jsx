import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../componets/Breadcrum";
import ProductDisplay from "../componets/ProductDisplay";
import styles from "../styles/Product.module.css";
import DescriptionBox from "../componets/DescriptionBox";
import RelatedProducts from "../componets/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className={styles.product}>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
