import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#contact";
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        Игра <span className={styles.lila}>Лили</span> с Ирой
      </div>

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
