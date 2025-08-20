import React from "react";
import styles from "./Hero.module.css";
import lilaPng from "../assets/lila.png"; // PNG вместо JPG

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        {/* Левая колонка — текст */}
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

        {/* Правая колонка — постер */}
        <div className={styles.visual}>
          <div className={styles.posterWrap}>
            <img
              src={lilaPng}
              alt="ЛИЛА — игра самопознания"
              className={styles.poster}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
