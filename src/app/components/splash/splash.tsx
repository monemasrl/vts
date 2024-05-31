import React from "react";
import style from "./splash.module.scss";
import IconAnimation from "../svg/iconAnimation";

function Splash() {
  return (
    <div className={style.splash}>
      <IconAnimation />
    </div>
  );
}

export default Splash;
