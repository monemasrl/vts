import React from "react";
import Image from "next/image";
import style from "./cardsLavora.module.scss";

type TdataCards = {
  titolo: string;
  image: string;
  link: string;
};

function CardsLavora({ dataCards }: { dataCards: TdataCards[] }) {
  return (
    <ul className={style.cardsLavora}>
      {dataCards.map((card, index) => (
        <li key={index}>
          <Image
            className={style.cardsLavora__image}
            src={`/image/${card.image}.jpg`}
            width={535}
            height={231}
            alt={card.image}
          />
          <a href={`#${card.link}`}>
            <h3>{card.titolo}</h3>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CardsLavora;
