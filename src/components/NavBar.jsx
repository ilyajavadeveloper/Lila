import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const goContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#contact";
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Игра Лили с Ирой</div>

      <ul className={styles.navLinks}>
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#game">Об игре</a></li>
        <li><a href="#pricing">Стоимость</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>

      <button className={styles.cta} onClick={goContact}>Записаться</button>
    </nav>
  );
}

export default NavBar;
