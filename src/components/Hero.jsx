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
      {/* Верхний блок с одним фото */}
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.kicker}>бережный формат · онлайн/офлайн</span>
          <h1>
            Трансформационная игра с{" "}
            <span className={styles.highlight}>Ирой Тищенко</span>
          </h1>
          <p className={styles.subtitle}>
            Понимание себя, ясность в запросе и план первых шагов.
            Индивидуально или в мини-группе.
          </p>
          <div className={styles.actions}>
            <button className={styles.cta} onClick={handleCta}>Записаться</button>
            <a href="#game" className={styles.secondary}>Как проходит</a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photoWrap}>
            <img
              src={iraPhoto}
              alt="Ира Тищенко — ведущая игры"
              className={styles.photo}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      {/* Обо мне — без фото, лаконично */}
      <div className={styles.about} id="about">
        <h2 className={styles.aboutTitle}>Обо мне</h2>
        <p className={styles.lead}>
          Привет! Я Ира Тищенко — ведущая трансформационных игр и фасилитатор личных изменений.
          Помогаю мягко и структурно разбираться с важными вопросами, видеть ресурсы и
          превращать инсайты в понятные шаги.
        </p>

        <ul className={styles.points}>
          <li>🫶 Бережно и экологично — безопасное пространство без давления.</li>
          <li>🎲 Игра + вопросы + метафорические карты — чтобы добраться до сути.</li>
          <li>🧭 Темы: выбор, отношения, самоценность, границы, карьера, деньги, творческий поток.</li>
        </ul>

        <div className={styles.meta}>
          <span>🖥 Онлайн (Zoom)</span>
          <span>📍 Офлайн — Ashdod</span>
          <span>👥 Индивидуально / мини-группа</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Подход</h3>
            <p>Сначала — ясность запроса, затем — движение малыми шагами с опорой на ваши ресурсы.</p>
          </div>
          <div className={styles.card}>
            <h3>Форматы</h3>
            <ul className={styles.listCompact}>
              <li>Индивидуальная игра (2–3 часа)</li>
              <li>Мини-группа — бережная динамика</li>
              <li>Онлайн или офлайн по договорённости</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Инструменты</h3>
            <p>Поле, карты, вопросы, рефлексия, планирование — уважение к вашему темпу без «волшебных обещаний».</p>
          </div>
        </div>

        <div className={styles.actionsAbout}>
          <a href="#contact" className={styles.cta}>Связаться</a>
          <a href="#pricing" className={styles.secondary}>Стоимость</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
