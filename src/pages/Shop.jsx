import Hero from "../componets/Hero";
import NewCollections from "../componets/NewCollections";
import Newsletter from "../componets/Newsletter";
import Offers from "../componets/Offers";
import Popular from "../componets/Popular";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </>
  );
};

export default Shop;
