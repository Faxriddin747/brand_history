import React from "react";
import cls from "./brand.module.scss";
import { YourBrand } from "@/components/svg";

export default function Brand() {

  const brandData = [
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
    {
      id: 1,
      img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fbrands%2F6%2FdipogE9hUTom7adaIdTm.jpg&w=3840&q=75",
    },
  ];

  return (
    <div className={cls.yourBrand}>
      <div className={cls.chooseYourBrand}>
        <div className={cls.textBrands}>
          <YourBrand />
          <p>
            ВЫБЕРИ <br />
            СВОЙ БРЕНД
          </p>
        </div>
        <div className={cls.buttonBrands}>
          <button>Смотреть всё</button>
        </div>
      </div>
      <div className={cls.brands}>
        {brandData.map((itemBrands) => (
          <img src={itemBrands.img} />
        ))}
      </div>
    </div>
  );
}
