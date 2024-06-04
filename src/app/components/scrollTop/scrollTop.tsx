"use client";
import style from "./scrollTop.module.scss";
import { RxArrowUp } from "react-icons/rx";
import { useScroll } from "framer-motion";

function ScrollTop() {
  const { scrollY } = useScroll();
  return (
    <div className={style.scrollTop}>
      <RxArrowUp />
    </div>
  );
}

export default ScrollTop;
