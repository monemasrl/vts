"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./accordion.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type Tdata = {
  title: string;
  content: string;
};
function Accordion({ data }: { data: Tdata[] }) {
  const [active, setActive] = useState<number>(0);
  console.log(active);
  return (
    <ul className={"accordion"}>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <h3 className="accordion__title" onClick={() => setActive(index)}>
              {active === index ? <FiChevronUp /> : <FiChevronDown />}
              {item.title}
            </h3>
            <motion.div
              className="accordion__content"
              style={{ overflow: "hidden" }}
              dangerouslySetInnerHTML={{ __html: item.content }}
              initial={{ height: 0 }}
              animate={{ height: active === index ? "auto" : 0 }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
