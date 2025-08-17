import React from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <h2 className={styles.title}>Стоимость участия</h2>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h3>Игра Лили с Ирой</h3>
          <p className={styles.price}>200 ₪</p>
          <ul className={styles.list}>
            <li>✔ Индивидуально или в мини-группе</li>
            <li>✔ Онлайн (Zoom) или офлайн в Ashdod</li>
            <li>✔ Длительность: 2–3 часа</li>
          </ul>
          <a href="#contact" className={styles.cta}>Записаться</a>
        </div>
      </div>
    </section>
  );
}
export default Pricing;
