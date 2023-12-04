import React from "react";
import arrow_icon from "../assets/arrow.png";
import hand_icon from "../assets/hand_icon.png";
import hero_image from "../assets/hero_image.png";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-left"]}>
        <h2>NEW Arrivals Only</h2>
        <div>
          <div className={styles["hero-hand-icon"]}>
            <p>New</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className={styles["hero-latest-btn"]}>
          <span>Latest Collections</span>
          <img src={arrow_icon} alt="Arrow" />
        </div>
      </div>
      <div className={styles["hero-right"]}>
        <img src={hero_image} alt="Hero Images" style={{ height: "100%" }} />
      </div>
    </div>
  );
};

export default Hero;
