import React from "react";
import cls from "./main.module.scss";
import Slide from "./Slide";
import { Filter, Percent, Heart, Comparison } from "../svg";

export default function Main() {
  return (
    <div className="container">
      <div className={cls.main}>
        <div className={cls.navigation}>
          <a href="#">
            <p>ПК "Powered by ASUS"</p>
          </a>
          <a href="#">
            <p>Моноблоки</p>
          </a>
          <a href="#">
            <p>Ноутбуки</p>
          </a>
          <a href="#">
            <p>Компьютеры</p>
          </a>
          <a href="#">
            <p>Телефоны и планшеты</p>
          </a>
          <a href="#">
            <p>Комплектующие</p>
          </a>
          <a href="#">
            <p>Сетевое оборудование</p>
          </a>
          <a href="#">
            <p>Серверное оборудование</p>
          </a>
          <a href="#">
            <p>Периферийные устройства</p>
          </a>
        </div>
        <div className={cls.containerfluid}>
          <div className={cls.slide}>
            <Slide />
            <img src="install.png" />
          </div>

          <div className={cls.popularcategoriyes}>
            <div className={cls.filter}>
              <Filter />
              <h1>Популярные категории</h1>
            </div>

            <div className={cls.categoriyes}>
              <div className={cls.cardcategoriyes}>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
                <div className={cls.cards}>
                  <img src="https://brandstore.uz/_next/static/media/1.3ce13da5.jpg" />
                  <p>Телефоны и планшеты</p>
                </div>
              </div>
            </div>
          </div>

          <div className={cls.goodcheaper}>
            <div className={cls.priceto}>
              <div className={cls.percentname}>
                <Percent />
                <p>
                  ТОВАРЫ <br />
                  ДЕШЕВЛЕ
                </p>
              </div>
              <div className={cls.pricevalue}>
                <p>200 000 сум</p>
                <p>500 000 сум</p>
                <p>1 000 000 сум</p>
              </div>
              <div className={cls.button}>
                <button>Смотреть всё</button>
              </div>
            </div>
            <div className={cls.cheapproduct}>
              <div className={cls.tableproducts}>
                <div className={cls.products}>
                  <div className={cls.heartdiagramm}>
                    <Heart />
                    <Comparison />
                  </div>
                  <div className={cls.images}>
                    <img src="https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F12720%2FzS4qtDCvkD6jUW34X4IQ-home_default.jpg&w=1920&q=75" />
                  </div>
                  <div className={cls.productnames}>
                    <small>Kabel</small>
                    <p>Kabel</p>
                  </div>
                  <div className={cls.productprices}>
                    <small>11 500 sum/mes</small>
                    <p>115 000 sum</p>
                    <button>v Korzinu</button>
                  </div>
                </div>
                <div className={cls.products}>
                  <div className={cls.heartdiagramm}>
                    <Heart />
                    <Comparison />
                  </div>
                  <div className={cls.images}>
                    <img src="https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F12720%2FzS4qtDCvkD6jUW34X4IQ-home_default.jpg&w=1920&q=75" />
                  </div>
                  <div className={cls.productnames}>
                    <small>Kabel</small>
                    <p>Kabel</p>
                  </div>
                  <div className={cls.productprices}>
                    <small>11 500 sum/mes</small>
                    <p>115 000 sum</p>
                    <button>v Korzinu</button>
                  </div>
                </div>
                <div className={cls.products}>
                  <div className={cls.heartdiagramm}>
                    <Heart />
                    <Comparison />
                  </div>
                  <div className={cls.images}>
                    <img src="https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F12720%2FzS4qtDCvkD6jUW34X4IQ-home_default.jpg&w=1920&q=75" />
                  </div>
                  <div className={cls.productnames}>
                    <small>Kabel</small>
                    <p>Kabel</p>
                  </div>
                  <div className={cls.productprices}>
                    <small>11 500 sum/mes</small>
                    <p>115 000 sum</p>
                    <button>v Korzinu</button>
                  </div>
                </div>
                <div className={cls.products}>
                  <div className={cls.heartdiagramm}>
                    <Heart />
                    <Comparison />
                  </div>
                  <div className={cls.images}>
                    <img src="https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F12720%2FzS4qtDCvkD6jUW34X4IQ-home_default.jpg&w=1920&q=75" />
                  </div>
                  <div className={cls.productnames}>
                    <small>Kabel</small>
                    <p>Kabel</p>
                  </div>
                  <div className={cls.productprices}>
                    <small>11 500 sum/mes</small>
                    <p>115 000 sum</p>
                    <button>v Korzinu</button>
                  </div>
                </div>
                <div className={cls.products}>
                  <div className={cls.heartdiagramm}>
                    <Heart />
                    <Comparison />
                  </div>
                  <div className={cls.images}>
                    <img src="https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F12720%2FzS4qtDCvkD6jUW34X4IQ-home_default.jpg&w=1920&q=75" />
                  </div>
                  <div className={cls.productnames}>
                    <small>Kabel</small>
                    <p>Kabel</p>
                  </div>
                  <div className={cls.productprices}>
                    <small>11 500 sum/mes</small>
                    <p>115 000 sum</p>
                    <button>v Korzinu</button>
                  </div>
                </div>
                <div className={cls.products}>
                  <div className={cls.heartdiagramm}>
                    <Heart />
                    <Comparison />
                  </div>
                  <div className={cls.images}>
                    <img src="https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F12720%2FzS4qtDCvkD6jUW34X4IQ-home_default.jpg&w=1920&q=75" />
                  </div>
                  <div className={cls.productnames}>
                    <small>Kabel</small>
                    <p>Kabel</p>
                  </div>
                  <div className={cls.productprices}>
                    <div>
                      <p>11 500 sum/mes</p>
                      <p>115 000 sum</p>
                    </div>
                    <div>
                      <button>v Korzinu</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cls.reklama}>
                <img src="https://brandstore.uz/_next/image?url=%2FredomcAs.png&w=3840&q=75" />
                <img src="https://brandstore.uz/_next/image?url=%2FacerNout.png&w=3840&q=75" />
              </div>
            </div>
          </div>

          <div className={cls.selections}></div>

          <div className={cls.yourbrand}></div>

          <div className={cls.recommends}></div>

          <div className={cls.blogs}></div>
        </div>
      </div>

      <div className={cls.footer}>
        <div className={cls.informations}></div>
      </div>
    </div>
  );
}
