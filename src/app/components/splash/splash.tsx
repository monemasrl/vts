import React from "react";
import style from "./splash.module.scss";
import IconAnimation from "../svg/iconAnimation";
import { motion } from "framer-motion";
function Splash() {
  return (
    <motion.div
      className={style.splash}
      initial={{ backgroundColor: "#314054" }}
      animate={{ backgroundColor: "#485f7d" }}
      transition={{ duration: 0.3 }}
    >
      <IconAnimation />
    </motion.div>
  );
}

export default Splash;
