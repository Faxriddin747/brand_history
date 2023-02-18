import React from "react";
import cls from "./selection.module.scss";
import { HeartForYou } from "@/components/svg";

export default function Selection() {

  return (
    <div className={cls.selections}>
      <div className={cls.selectionsTitle}>
        <HeartForYou />
        <p>
          ПОДБОРКИ <br />
          ДЛЯ ВАС
        </p>
      </div>
      <div className={cls.selectionsForYou}>
        <img src="https://brandstore.uz/_next/image?url=%2Fcollec.png&w=3840&q=75" />
        <img src="https://brandstore.uz/_next/image?url=%2Fcomputer1.png&w=3840&q=75" />
        <img src="https://brandstore.uz/_next/image?url=%2Fnote.png&w=3840&q=75" />
      </div>
      <img src="https://brandstore.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FasusBanner.e8b6cfb3.jpg&w=3840&q=75" />
    </div>
  );
}
