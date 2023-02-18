import React from "react";
import cls from "./navigation.module.scss";

export default function Navigation() {
  return (
    <div className="container">
      <div className={cls.navigation}>
        <a href="#">
          <p>Ноутбуки</p>
        </a>
        <a href="#">
          <p>Компьютеры</p>
        </a>
        <a href="#">
          <p>Моноблоки</p>
        </a>
        <a href="#">
          <p>Телефоны и планшеты</p>
        </a>
        <a href="#">
          <p>Комплектующие</p>
        </a>
        <a href="#">
          <p>Периферийные устройства</p>
        </a>
        <a href="#">
          <p>Сетевое оборудование</p>
        </a>
        <a href="#">
          <p>Серверное оборудование</p>
        </a>
        <a href="#">
          <p>Оргтехника</p>
        </a>
      </div>
    </div>
  );
}
