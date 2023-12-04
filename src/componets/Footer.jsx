import instagramIcon from "../assets/instagram_icon.png";
import footerLogo from "../assets/logo.png";
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-logo"]}>
        <img src={footerLogo} alt="Footer logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles["footer-links"]}>
        <li>
          <a href="#">Company</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Offices</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className={styles["footer-social-icon"]}>
        <div className={styles["footer-icons-container"]}>
          <img src={instagramIcon} alt="Instagram" />
        </div>
        <div className={styles["footer-icons-container"]}>
          <img src={pintesterIcon} alt="Instagram" />
        </div>
        <div className={styles["footer-icons-container"]}>
          <img src={whatsappIcon} alt="Instagram" />
        </div>
      </div>
      <div className={styles["footer-copyright"]}>
        <hr />
        <p>Copyright @2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
