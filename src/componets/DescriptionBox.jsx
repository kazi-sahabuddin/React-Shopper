import styles from "../styles/DescriptionBox.module.css";
const DescriptionBox = () => {
  return (
    <div className={styles["description-box"]}>
      <div className={styles.navigator}>
        <div className={styles["nav-box"]}>Description</div>
        <div className={`${styles["nav-box"]} ${styles.fade}`}>
          Reviews (122)
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta natus
          debitis deserunt officiis ratione veniam voluptatem iste, magni
          laboriosam nam mollitia atque necessitatibus cumque. Eaque ipsam velit
          suscipit quibusdam nam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum porro facere, autem molestiae iste harum, hic,
          temporibus incidunt recusandae consequatur dolorem error distinctio.
          Aliquam, officia harum hic maxime cumque rerum.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
