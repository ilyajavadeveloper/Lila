import React from "react";
import styles from "./AboutGame.module.css";

function AboutGame() {
  return (
    <section className={styles.section} id="game">
      <div className={styles.header}>
        <h2>Об игре</h2>
        <p>
          Трансформационная игра — бережный и структурный способ разобраться с запросом,
          увидеть новые смыслы и превратить инсайты в понятные шаги.
        </p>

        <div className={styles.meta}>
          <span>⏳ 2–3 часа</span>
          <span>🖥 Онлайн / 📍 офлайн</span>
          <span>👥 Индивидуально / мини-группа</span>
        </div>

        <ul className={styles.badges}>
          <li>Выбор и решение</li>
          <li>Отношения</li>
          <li>Карьера и деньги</li>
          <li>Внутреннее состояние</li>
          <li>Уверенность и самоценность</li>
          <li>Творческая энергия</li>
        </ul>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>🧭</div>
          <h3>Ясность</h3>
          <p>Сформулируем истинный запрос и определим, что действительно важно сейчас.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>💡</div>
          <h3>Инсайты</h3>
          <p>Находим ключевые смыслы и новые перспективы — без давления и насилия над собой.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🗺️</div>
          <h3>План действий</h3>
          <p>Переводим инсайты в простые шаги с понятными сроками и поддержкой.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🫶</div>
          <h3>Безопасное пространство</h3>
          <p>Тёплая, бережная атмосфера — можно быть собой и говорить о важном.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🎲</div>
          <h3>Игровые механики</h3>
          <p>Поле, карты, вопросы и метафоры помогают добраться до сути мягко и глубоко.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🌿</div>
          <h3>Экологично</h3>
          <p>Никакой «магии результата» — только уважение к темпу и ресурсам клиента.</p>
        </div>
      </div>

      <div className={styles.steps}>
        <h4>Как проходит встреча</h4>
        <ul>
          <li><span>1</span> Знакомство и формулировка цели (5–7 минут)</li>
          <li><span>2</span> Настрой и выбор намерения, согласование правил</li>
          <li><span>3</span> Игровой процесс: поле, карты, вопросы, фиксация инсайтов</li>
          <li><span>4</span> Сбор смысла: что важно, что поддерживает, что мешает</li>
          <li><span>5</span> План действий: первые шаги + рекомендации по закреплению</li>
        </ul>
      </div>

      <div className={styles.ctaWrap}>
        <a href="#contact" className={styles.cta}>Записаться</a>
      </div>
    </section>
  );
}

export default AboutGame;
