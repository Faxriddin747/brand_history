import React from "react";
import cls from "./blogs.module.scss";

export default function Blogs() {

    const blogData = [
        {
          id: 1,
          name: "ПРЕЗЕНТАЦИЯ ASUS «ВЗГЛЯНИ В НЕВЕРОЯТНОЕ БУДУЩЕЕ» CES 2023",
          img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fposts%2F32%2FZG4IKqLsAXgcvv8S1Ncp-post_image_default.jpg&w=640&q=75",
        },
        {
          id: 1,
          name: "ПРЕЗЕНТАЦИЯ ASUS «ВЗГЛЯНИ В НЕВЕРОЯТНОЕ БУДУЩЕЕ» CES 2023",
          img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fposts%2F32%2FZG4IKqLsAXgcvv8S1Ncp-post_image_default.jpg&w=640&q=75",
        },
        {
          id: 1,
          name: "ПРЕЗЕНТАЦИЯ ASUS «ВЗГЛЯНИ В НЕВЕРОЯТНОЕ БУДУЩЕЕ» CES 2023",
          img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fposts%2F32%2FZG4IKqLsAXgcvv8S1Ncp-post_image_default.jpg&w=640&q=75",
        },
        {
          id: 1,
          name: "ПРЕЗЕНТАЦИЯ ASUS «ВЗГЛЯНИ В НЕВЕРОЯТНОЕ БУДУЩЕЕ» CES 2023",
          img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fposts%2F32%2FZG4IKqLsAXgcvv8S1Ncp-post_image_default.jpg&w=640&q=75",
        },
        {
          id: 1,
          name: "ПРЕЗЕНТАЦИЯ ASUS «ВЗГЛЯНИ В НЕВЕРОЯТНОЕ БУДУЩЕЕ» CES 2023",
          img: "https://brandstore.uz/_next/image?url=https%3A%2F%2Fdl.bs365.uz%2Fstorage%2Fposts%2F32%2FZG4IKqLsAXgcvv8S1Ncp-post_image_default.jpg&w=640&q=75",
        },
      ];
      
  return (
    <div className={cls.blogs}>
      <div>
        <div className={cls.blogBrand}>
          <div className={cls.blogname}>
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
        <div className={cls.blogProduct}>
          {blogData.map((itemBlog) => (
            <div className={cls.productsType}>
              <img src={itemBlog.img} />
              <p>{itemBlog.name}</p>
              <a href="">
                <span>Читать далее</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
