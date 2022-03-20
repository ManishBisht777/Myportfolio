import React from "react";
import style from "../styles/landingpage.module.css";

const Landingpage = () => {
  return (
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
  );
};

export default Landingpage;
