import React, { useState, useEffect } from "react";
import cls from "./cheaper.module.scss";
import axios from "axios";
import { url } from "../../../api/url";
import { Percent, Heart, Comparison } from "@/components/svg";

export default function GoodCheaper() {
  const [twoData, setTwoData] = useState({});
  const [threeData, setThreeData] = useState({});
  const [fourData, setFourData] = useState({});

  const [cheaper, setCheaper] = useState(1);

  useEffect(() => {
    axios
      .get(`${url}/api/home`, {
        params: {
          type: "max_price_two_hundred_thousands",
        },
      })
      .then((response) => {
        setTwoData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/api/home`, {
        params: {
          type: "max_price_half_million",
        },
      })
      .then((response) => {
        setThreeData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/api/home`, {
        params: {
          type: "max_price_million",
        },
      })
      .then((response) => {
        setFourData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(twoData, "data");
  console.log(threeData, "data");
  console.log(fourData, "data");
  
  return (
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
          <button className={cheaper === 1 && cls.active } onClick={() => setCheaper(1)}>200 000 сум</button>
          <button className={cheaper === 2 && cls.active } onClick={() => setCheaper(2)}>500 000 сум</button>
          <button className={cheaper === 3 && cls.active } onClick={() => setCheaper(3)}>1 000 000 сум</button>
        </div>
        <div className={cls.button}>
          <button>Смотреть всё</button>
        </div>
      </div>
      <div className={cls.cheapproduct}>
        {(() => {
          switch (cheaper) {
            case 1:
              return (
                <>
                  <div className={cls.tableproducts}>
                    {twoData?.product_request?.length &&
                      twoData.product_request?.slice(0, 6).map((item) => (
                        <div className={cls.products}>
                          <div className={cls.heartdiagramm}>
                            <Heart />
                            <Comparison />
                          </div>
                          <div className={cls.images}>
                            <img src={item.images[0].url} />
                          </div>
                          <div className={cls.productnames}>
                            <small>{item.class.name}</small>
                            <p>{item.name}</p>
                          </div>
                          <div className={cls.productprices}>
                            <div>
                              <p>{item.random_shop.monthly_price} sum/mes</p>
                              <p>{item.random_shop.price} sum</p>
                            </div>
                            <div>
                              <button>v Korzinu</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              );
            case 2:
              return (
                <>
                  <div className={cls.tableproducts}>
                    {threeData?.product_request?.length &&
                      threeData.product_request?.slice(0, 6).map((item) => (
                        <div className={cls.products}>
                          <div className={cls.heartdiagramm}>
                            <Heart />
                            <Comparison />
                          </div>
                          <div className={cls.images}>
                            <img src={item.images[0].url} />
                          </div>
                          <div className={cls.productnames}>
                            <small>{item.class.name}</small>
                            <p>{item.name}</p>
                          </div>
                          <div className={cls.productprices}>
                            <div>
                              <p>{item.random_shop.monthly_price} sum/mes</p>
                              <p>{item.random_shop.price} sum</p>
                            </div>
                            <div>
                              <button>v Korzinu</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              );
            case 3:
              return (
                <>
                  <div className={cls.tableproducts}>
                    {fourData?.product_request?.length &&
                      fourData.product_request?.slice(0, 6).map((item) => (
                        <div className={cls.products}>
                          <div className={cls.heartdiagramm}>
                            <Heart />
                            <Comparison />
                          </div>
                          <div className={cls.images}>
                            <img src={item.images[0].url} />
                          </div>
                          <div className={cls.productnames}>
                            <small>{item.class.name}</small>
                            <p>{item.name}</p>
                          </div>
                          <div className={cls.productprices}>
                            <div>
                              <p>{item.random_shop.monthly_price} sum/mes</p>
                              <p>{item.random_shop.price} sum</p>
                            </div>
                            <div>
                              <button>v Korzinu</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              );
          }
        })()}

        <div className={cls.reklama}>
          <img src="https://brandstore.uz/_next/image?url=%2FredomcAs.png&w=3840&q=75" />
          <img src="https://brandstore.uz/_next/image?url=%2FacerNout.png&w=3840&q=75" />
        </div>
      </div>
    </div>
  );
}
