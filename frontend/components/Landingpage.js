import React from "react";
import style from "../styles/landingpage.module.css";
import profile from "../assets/bg6.jpg";
import Image from "next/image";

const Landingpage = () => {
  return (
    <div className={style.maindiv}>
      <div className={style.homepage}>
        <div className={style.introduction}>Hi There</div>
        <div>
          <h4 className={style.name}>
            I am Man <span>i</span> sh
          </h4>
        </div>
        <h4 className={style.role}>FrontEnd Developer</h4>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea,
          esse minus recusandae repellendus provident est in! Repellat numquam
          consequuntur dolores unde repudiandae tempore quas corporis, quod
          quidem, iusto fugit?
        </p>
        <div className={style.buttonpair}>
          <button className={style.explore}>Explore</button>
          <button className={style.explore}>Resume</button>
        </div>
      </div>
      <div className={style.profileimagebx}>
        <Image src={profile} alt="Image_hu-Mai" />
      </div>

      <div className={style.scrollme}>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
      </div>
      <div className={style.scrollmeto}>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
        <p>scroll me</p>
      </div>
    </div>
  );
};

export default Landingpage;
