import React from "react";
import cls from "./popularcategoriyes.module.scss";
import {Filter} from '../../svg'

export default function PopularCategoriyes() {
  
  const categoriyesData = [
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/static/media/1.3ce13da5.jpg",
      name: "Телефоны и планшеты",
    },
  ];
  return (
    <div className={cls.popularcategoriyes}>
      <div className={cls.filter}>
        <Filter />
        <h1>Популярные категории</h1>
      </div>

      <div className={cls.categoriyes}>
        <div className={cls.cardcategoriyes}>
          {categoriyesData.map((itemCategoriyes) => (
            <div className={cls.cards}>
              <img src={itemCategoriyes.img} />
              <p>{itemCategoriyes.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
