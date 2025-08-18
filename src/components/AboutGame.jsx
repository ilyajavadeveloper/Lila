import React from "react";
import styles from "./AboutGame.module.css";

function AboutGame() {
  return (
    <section className={styles.section} id="game">
      <div className={styles.header}>
        <h2>Об игре</h2>
        <p>
          Трансформационная игра проходит <b>вживую</b> — это возможность встретиться с собой 
          в бережном пространстве, увидеть новые смыслы и превратить инсайты в шаги, 
          которые реально сделать.
          <br /><br />
          ⚡ А если нужен именно разбор онлайн — Ира проводит <b>отдельные консультации</b>.
        </p>

        <div className={styles.meta}>
          <span>⏳ 2–3 часа</span>
          <span>📍 Офлайн (живое участие)</span>
          <span>👥 Индивидуально / мини-группа</span>
        </div>

        <ul className={styles.badges}>
          <li>Выбор и решения</li>
          <li>Отношения</li>
          <li>Карьера и деньги</li>
          <li>Внутренний баланс</li>
          <li>Самоценность</li>
          <li>Творческий поток</li>
        </ul>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>🧭</div>
          <h3>Ясность</h3>
          <p>Сформулируем настоящий запрос и определим, что действительно важно именно сейчас.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>💡</div>
          <h3>Инсайты</h3>
          <p>Найдём ключевые смыслы и новые перспективы — без давления и ожидания «правильных ответов».</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🗺️</div>
          <h3>План действий</h3>
          <p>Превратим открытия в реальные шаги с понятными сроками и поддержкой.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🫶</div>
          <h3>Атмосфера</h3>
          <p>Бережное пространство, где можно быть собой и говорить о важном открыто.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🎲</div>
          <h3>Игровой процесс</h3>
          <p>Поле, карты, вопросы и метафоры помогают глубже и мягче дойти до сути.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🌿</div>
          <h3>Экологичность</h3>
          <p>Уважение к твоему темпу и ресурсам. Никакой «магии результата» — только практика.</p>
        </div>
      </div>

      <div className={styles.steps}>
        <h4>Как проходит встреча</h4>
        <ul>
          <li><span>1</span> Знакомство и формулировка цели (5–7 минут)</li>
          <li><span>2</span> Настрой и выбор намерения, правила</li>
          <li><span>3</span> Игра: поле, карты, вопросы, фиксация инсайтов</li>
          <li><span>4</span> Осмысление: что важно, что поддерживает, что мешает</li>
          <li><span>5</span> План действий: первые шаги и рекомендации</li>
        </ul>
      </div>

      <div className={styles.ctaWrap}>
        <a href="#contact" className={styles.cta}>Записаться</a>
      </div>
    </section>
  );
}

export default AboutGame;
