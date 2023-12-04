import styles from "../styles/Newsletter.module.css";
const Newsletter = () => {
  return (
    <div className={styles.newsbg}>
      <div className={styles.newsletter}>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and updated</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
