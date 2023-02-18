import React from "react";
import cls from "./footer.module.scss";
import { Telegram, Facebook, Twitter, Instagram } from "@/components/svg";

export default function Footer() {
  return (
    // <div className="container">
    <div className={cls.footer}>
      <div className={cls.information}>
        <h1>BRAND STORE</h1>
        <a href="tel:+998 71 205 93 93">
        <p>+998 71 205 93 93</p>
        </a>
        <p>
          График работы колл-центра: <br /> Eжедневно, 09:00 до 21:00
        </p>
        <a href="">
          <p>info@brandstore.uz</p>
        </a>
        <div className={cls.footerSvg}>
          <div>
            <a href="">
              <Telegram />
            </a>
          </div>
          <div>
            <a href="">
              <Facebook />
            </a>
          </div>
          <div>
            <a href="">
              <Twitter />
            </a>
          </div>
          <div>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>
        <div className={cls.footerIcon}>
          <a href="">
            <img src="https://brandstore.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple2.66d34011.png&w=3840&q=75" />
          </a>
          <a href="">
            <img src="https://brandstore.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.1d6bea1c.png&w=3840&q=75" />
          </a>
        </div>
      </div>
      <div className={cls.categoriyesFooter}>
        <h2>Категории</h2>
        <p>Моноблоки</p>
        <p>Компьютеры</p>
        <p>Видеокарты</p>
        <p>Мониторы</p>
        <p>МФУ</p>
        <p>Телефоны</p>
      </div>
      <div className={cls.magazinFooter}>
        <h2>Интернет магазин</h2>
        <p>Политика конфиденциальности</p>
        <p>О нашей компании</p>
        <p>Правила программы лояльности</p>
        <p>Правила пользования сайтом</p>
        <p>Контакты</p>
        <p>НАШИ МАГАЗИНЫ</p>
      </div>
      <div className={cls.buyersFooter}>
        <h2>Покупателям</h2>
        <p>Покупка в рассрочку</p>
        <p>Доставка и оплата</p>
        <p>Правила покупок с кэшбека</p>
        <p>Возврат / обмен</p>
        <p>Правила пользования купонами</p>
      </div>
    </div>
    // </div>
  );
}
