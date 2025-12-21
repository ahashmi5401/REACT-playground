import React from 'react';
import style from './card.module.css'; // CSS module for scoped styles

const Card = ({obj}) => {
  const { title, description, buttonText } = obj;
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={style['card-btn']}>{buttonText}</button>
    </div>
  );
}

export default Card;
