import React from "react";
import cls from "./Navbar.module.scss";
import { Person, Heart, Comparison, Bag, Menu, Search } from "../../svg";

export default function Navbar() {
  return (
    <div className="container">
      <div className={cls.navbar}>
        <div className={cls.brandstore}>
          <a href="/">
            <h1>BRAND STORE</h1>
          </a>
        </div>
        <div>
          <button>
            <Menu /> Категории
          </button>
        </div>
        <div className={cls.input}>
          <input type="search" placeholder="Поиск по товарам..." />
          <Search />
        </div>
        <div className={cls.svg}>
          <div className={cls.svgtext}>
            <Person /> <p>Кабинет</p>
          </div>
          <div className={cls.svgtext}>
            <Heart />
            <p>Избранное</p>
          </div>
          <div className={cls.svgtext}>
            <Comparison />
            <p>Сравнение</p>
          </div>
          <div className={cls.svgtext}>
            <Bag />
            <p>Корзина</p>
          </div>
        </div>
      </div>
      <div className={cls.border}></div>
    </div>
  );
}
