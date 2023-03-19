import React from 'react';

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }

  return (
    <li className="card">
      <div className="card__img-container">
        <img className="card__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      </div>
      <div className="card__footer">
        <h2 className="card__title">{card.name}</h2>
        <div className="like">
          <button type="button" className="card__like"></button>
          <p className="like__counter">{card.likes.length}</p>
        </div>
      </div>
      <button className="card__delete" type="button"></button>
    </li>
  );
}

export default Card;
