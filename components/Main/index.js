import React, { useState, useEffect } from "react";
import cls from "./main.module.scss";

import Slide from "./Slide";
import Navigation from "./Navigation";
import PopularCategoriyes from "./PopularCategoriyes";
import GoodCheaper from "./GoodCheaper";
import Selection from "./Selection";
import Brand from "./Brand";
import Recommends from "./Recommends";

import {Message} from "../svg";
import axios from "axios";
import { url } from "../../api/url";

export default function Main() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/banners`, {})
      .then((response) => {
        setData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="container">
      <div className={cls.main}>
        <Navigation />

        <div className={cls.containerfluid}>
          <div className={cls.slide}>
            <Slide bannerData={data} />
            <img src="install.png" />
          </div>

          <PopularCategoriyes />

          <GoodCheaper />

          <Selection />

          <Brand/>

          <Recommends/>

        </div>
        <div className={cls.message}>
          <Message />
        </div>
      </div>
    </div>
  );
}
