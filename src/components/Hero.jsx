import React from "react";
import styles from "./Hero.module.css";
import iraPhoto from "../assets/ira.jpg";

function Hero() {
  const handleCta = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#contact";
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        {/* Текстовая часть */}
        <div className={styles.copy}>
          <span className={styles.kicker}>бережный формат · онлайн/офлайн</span>
          <h1>
            Трансформационная игра{" "}
            <span className={styles.lila}>ЛИЛА</span> с{" "}
            <span className={styles.highlight}>Ирой Тищенко</span>
          </h1>
          <p className={styles.subtitle}>
            Понимание себя, ясность в запросе и план первых шагов.  
            Индивидуально или в мини-группе.
          </p>
          <div className={styles.actions}>
            <button className={styles.cta} onClick={handleCta}>
              Записаться
            </button>
            <a href="#game" className={styles.secondary}>Как проходит</a>
          </div>
        </div>

        {/* Фото */}
        <div className={styles.visual}>
          <div className={styles.photoWrap}>
            <img
              src={iraPhoto}
              alt="Ира Тищенко — ведущая игры Лила"
              className={styles.photo}
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
