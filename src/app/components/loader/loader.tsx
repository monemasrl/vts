import style from "./loader.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
function LoaderSite() {
  return (
    <motion.div
      className={style.loader}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0.3, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <Image
          src="/image/vts-icon.svg"
          width={200}
          height={200}
          alt="loader"
        />
      </motion.div>
    </motion.div>
  );
}
export default LoaderSite;
