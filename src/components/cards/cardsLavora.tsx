"use client";
import React from "react";
import Image from "next/image";
import style from "./cardsLavora.module.scss";
import { Suspense } from "react";
import ImagePreload from "../imagePreload/imagePreload";

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
          <div className={style.cardsLavora__image}>
            <ImagePreload
              src={`/image/${card.image}.jpg`}
              width={535}
              height={231}
              alt={card.image}
              full
            />
          </div>

          <a href={`#${card.link}`}>
            <h3>{card.titolo}</h3>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CardsLavora;
