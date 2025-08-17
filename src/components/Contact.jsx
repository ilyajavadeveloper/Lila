import React, { useState } from "react";
import styles from "./Contact.module.css";

/* SVG-иконки */
const TelegramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M9.036 15.47 8.9 19.8a.9.9 0 0 0 1.6.57l2.053-2.53 4.497 3.292c.83.61 2.003.16 2.266-.86l3.65-14.28c.27-1.06-.78-1.96-1.79-1.52L1.39 10.07c-1.16.51-1.07 2.2.13 2.57l5.86 1.81 10.85-9.34a.3.3 0 0 1 .4.44L9.036 15.47Z"/>
  </svg>
);
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .1 5.37.1 11.96c0 2.1.55 4.15 1.6 5.97L0 24l6.24-1.63a12 12 0 0 0 5.82 1.49h.01c6.6 0 11.96-5.37 11.96-11.96 0-3.2-1.25-6.22-3.52-8.42Zm-8.46 18.1h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.95 9.95 0 0 1-1.51-5.32c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.86 9.86 0 0 1 2.91 7.03c0 5.49-4.46 9.94-9.95 9.94Z"/>
  </svg>
);
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.53 15.53 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 12.4 12.4 0 0 0 3.89.62 1 1 0 0 1 1 1V20a2 2 0 0 1-2 2C9.16 22 2 14.84 2 6a2 2 0 0 1 2-2h2.44a1 1 0 0 1 1 1c0 1.36.22 2.68.62 3.89a1 1 0 0 1-.25 1.01l-2.2 2.2Z"/>
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6Zm0 2.85V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.85l-9.34 5.83a2 2 0 0 1-2.12 0L2 8.85Z"/>
  </svg>
);
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
  </svg>
);
const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
  </svg>
);

function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", format: "online", date: "", message: "", consent: false,
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return setStatus("no-consent");
    setStatus("sending");
    setTimeout(() => setStatus("success"), 600);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h2>Запись на игру</h2>
          <p>Оставьте контакты — Ира свяжется с вами и предложит ближайшие слоты.</p>

          <ul className={styles.contactsList}>
            <li>
              <a className={styles.contactLink} href="https://t.me/IrenaShraybman" target="_blank" rel="noreferrer">
                <span className={`${styles.icon} ${styles.tg}`}><TelegramIcon/></span>
                <span>@IrenaShraybman</span>
              </a>
            </li>
            <li>
              <a className={styles.contactLink} href="https://wa.me/380975992075" target="_blank" rel="noreferrer">
                <span className={`${styles.icon} ${styles.wa}`}><WhatsAppIcon/></span>
                <span>WhatsApp: +380 97 599 2075</span>
              </a>
            </li>
            <li>
              <a className={styles.contactLink} href="https://www.facebook.com/share/1ANUQ9yhEu/" target="_blank" rel="noreferrer">
                <span className={styles.icon}><FacebookIcon/></span>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a className={styles.contactLink} href="tel:+380975992075">
                <span className={styles.icon}><PhoneIcon/></span>
                <span>+380 97 599 2075</span>
              </a>
            </li>
            <li>
              <a className={styles.contactLink} href="mailto:Irentishchenko@gmail.com">
                <span className={styles.icon}><MailIcon/></span>
                <span>Irentishchenko@gmail.com</span>
              </a>
            </li>
            <li>
              <a className={styles.contactLink} href="https://www.google.com/maps?q=Ha-Gdud%20ha-Ivri%20St%206%2C%20Ashdod" target="_blank" rel="noreferrer">
                <span className={styles.icon}><PinIcon/></span>
                <span>Ha-Gdud ha-Ivri St 6, Ashdod</span>
              </a>
            </li>
          </ul>

          <div className={styles.quickActions}>
            <a className={`${styles.actionBtn} ${styles.actionPrimary}`} href="https://wa.me/380975992075?text=Здравствуйте%2C%20хочу%20записаться%20на%20игру" target="_blank" rel="noreferrer">
              <WhatsAppIcon/> <span>Написать в WhatsApp</span>
            </a>
            <a className={styles.actionBtn} href="https://t.me/IrenaShraybman" target="_blank" rel="noreferrer">
              <TelegramIcon/> <span>Написать в Telegram</span>
            </a>
          </div>

          <div className={styles.note}>Формат: онлайн (Zoom) или офлайн в Ashdod — по договорённости.</div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Имя*</span>
              <input type="text" name="name" placeholder="Как к вам обращаться" value={form.name} onChange={handleChange} required />
            </label>
            <label className={styles.field}>
              <span>Телефон / Telegram*</span>
              <input type="text" name="phone" placeholder="+380 ... или @username" value={form.phone} onChange={handleChange} required />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Предпочтительный формат</span>
              <select name="format" value={form.format} onChange={handleChange}>
                <option value="online">Онлайн (Zoom)</option>
                <option value="offline">Офлайн (Ashdod)</option>
                <option value="group">Мини-группа</option>
                <option value="individual">Индивидуально</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Желаемая дата</span>
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </label>
          </div>

          <label className={styles.field}>
            <span>Коротко о запросе</span>
            <textarea name="message" rows="4" placeholder="С чем хотите поработать?" value={form.message} onChange={handleChange} />
          </label>

          <label className={styles.checkbox}>
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
            <span>Согласен(на) на обработку данных</span>
          </label>

          <button className={styles.submit} type="submit" disabled={status === "sending" || status === "success"}>
            {status === "sending" ? "Отправляем..." : status === "success" ? "Заявка отправлена" : "Оставить заявку"}
          </button>

          {status === "no-consent" && <div className={styles.error}>Пожалуйста, подтвердите согласие.</div>}
          {status === "success" && <div className={styles.success}>Спасибо! Мы свяжемся с вами в ближайшее время.</div>}
        </form>
      </div>
    </section>
  );
}
export default Contact;
