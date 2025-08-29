// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import iraJpg from "../assets/ira.jpg";

function Hero() {
  return (
    <section className={`${styles.hero} page`} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Лила: <span className={styles.highlight}>Новый взгляд</span>
          </h1>
          <p className={styles.subtitle}>
            Психологическая трансформационная игра под руководством{" "}
            <b>Иры Тищенко</b>.
          </p>

          <ul className={styles.points}>
            <li>✨ Увидеть ситуацию под другим углом</li>
            <li>✨ Осознать повторяющиеся сценарии</li>
            <li>✨ Найти новые ресурсы и решения</li>
            <li>✨ Прожить путь к внутренней гармонии</li>
          </ul>

          <p className={styles.bio}>
            <b>Ира Тищенко</b> — практикующий психотерапевт. Она проводит не
            только игру «Лила», но и <b>частные консультации</b>, где помогает
            мягко разбирать личные запросы и находить реальные шаги к изменениям.
          </p>

          <div className={styles.actions}>
            <a href="#game" className={styles.cta}>Подробнее об игре</a>
            <a href="#contact" className={styles.secondary}>Записаться</a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.posterWrap}>
            <img
              src={iraJpg}
              alt="Ира Тищенко — психотерапевт и ведущая игры"
              className={styles.poster}
              loading="eager"
              decoding="async"
            />
            <div className={styles.overlay}>
              <span className={styles.caption}>
                Ира Тищенко — психотерапевт
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
