import React from "react";
import styles from "./Hero.module.css";
import lilaPng from "../assets/lila.png";

function Hero() {
  return (
    <section className={`${styles.hero} page`} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>Лично</span>
          <h1>
            Трансформационная игра <span className={styles.lila}>ЛИЛА</span> с{" "}
            <span className={styles.highlight}>Ирой Тищенко</span>
          </h1>
          <p className={styles.subtitle}>
            Понимание себя, ясность в запросе и план первых шагов. Индивидуально
            или в мини-группе.
          </p>

          <div className={styles.actions}>
            <a href="#game" className={styles.cta}>Игра</a>
            <a href="#contact" className={styles.secondary}>Место проведения</a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.posterWrap}>
            <img src={lilaPng} alt="ЛИЛА — игра самопознания" className={styles.poster} loading="eager" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
