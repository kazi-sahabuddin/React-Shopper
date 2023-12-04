import styles from "../styles/LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={styles.loginsignup}>
      <div className={styles["loginsignup-container"]}>
        <h1>Sign Up</h1>
        <div className={styles["loginsignup-fields"]}>
          <input
            className={styles["loginsignup-fields-input"]}
            type="text"
            placeholder="Your name"
          />
          <input
            className={styles["loginsignup-fields-input"]}
            type="email"
            placeholder="Email address"
          />
          <input
            className={styles["loginsignup-fields-input"]}
            type="password"
            placeholder="Password"
          />
          <div className={styles["loginsignup-agree"]}>
            <input type="checkbox" name="" id="" />
            By continuing, I agree to terms of use & privacy and policy
          </div>
          <button className={styles.btn}>Continue</button>
        </div>

        <p className={styles["loginsignup-login"]}>
          Already hava an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
