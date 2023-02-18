import React from "react";
import cls from "./recommends.module.scss";
import { Percent, Heart, Comparison} from "@/components/svg";

export default function Recommend() {
  
  const recommendsData = [
    {
      id: 1,
      name: "Телефон",
      discr: "Телефон TECNO Spark 6 Go KE5 2/32GB Ice Jadeite",
      mPrice: "128 200",
      price: "1 282 000",
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F14020%2FGbSb4UwJlpacaCypF8NV-home_default.jpg&w=3840&q=75",
    },
    {
      id: 1,
      name: "Телефон",
      discr: "Телефон TECNO Spark 6 Go KE5 2/32GB Ice Jadeite",
      mPrice: "128 200",
      price: "1 282 000",
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F14020%2FGbSb4UwJlpacaCypF8NV-home_default.jpg&w=3840&q=75",
    },
    {
      id: 1,
      name: "Телефон",
      discr: "Телефон TECNO Spark 6 Go KE5 2/32GB Ice Jadeite",
      mPrice: "128 200",
      price: "1 282 000",
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F14020%2FGbSb4UwJlpacaCypF8NV-home_default.jpg&w=3840&q=75",
    },
    {
      id: 1,
      name: "Телефон",
      discr: "Телефон TECNO Spark 6 Go KE5 2/32GB Ice Jadeite",
      mPrice: "128 200",
      price: "1 282 000",
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F14020%2FGbSb4UwJlpacaCypF8NV-home_default.jpg&w=3840&q=75",
    },
    {
      id: 1,
      name: "Телефон",
      discr: "Телефон TECNO Spark 6 Go KE5 2/32GB Ice Jadeite",
      mPrice: "128 200",
      price: "1 282 000",
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F14020%2FGbSb4UwJlpacaCypF8NV-home_default.jpg&w=3840&q=75",
    },
    {
      id: 1,
      name: "Телефон",
      discr: "Телефон TECNO Spark 6 Go KE5 2/32GB Ice Jadeite",
      mPrice: "128 200",
      price: "1 282 000",
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fproducts%2F14020%2FGbSb4UwJlpacaCypF8NV-home_default.jpg&w=3840&q=75",
    },
  ];

  return (
    <div className={cls.recommends}>
      <div className={cls.priceRecom}>
        <div className={cls.percentname}>
          <Percent />
          <p>
            BRAND STORE
            <br /> РЕКОМЕНДУЕТ
          </p>
        </div>
        <div className={cls.button}>
          <button>Смотреть всё</button>
        </div>
      </div>
      <div className={cls.cheapproduct}>
        <div className={cls.tableproducts}>
          {recommendsData.map((item) => (
            <div className={cls.products}>
              <div className={cls.heartdiagramm}>
                <Heart />
                <Comparison />
              </div>
              <div className={cls.images}>
                <img src={item.img} />
              </div>
              <div className={cls.productnames}>
                <small>{item.name}</small>
                <p>{item.discr}</p>
              </div>
              <div className={cls.productprices}>
                <div>
                  <p>{item.mPrice} sum/mes</p>
                  <p>{item.price} sum</p>
                </div>
                <div>
                  <button>v Korzinu</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={cls.reklama}>
          <img src="https://brandstore.uz/_next/image?url=%2FredomcAs.png&w=3840&q=75" />
          <img src="https://brandstore.uz/_next/image?url=%2FacerNout.png&w=3840&q=75" />
        </div>
      </div>
    </div>
  );
}
