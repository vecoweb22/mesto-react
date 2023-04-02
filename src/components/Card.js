import { useContext } from 'react';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardLike, onCardDelete, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  const likeButtonClassName = `card__like ${isLiked ? 'card__like_active' : ''}`;
  const isOwner = card.owner._id === currentUser._id;
  const deleteButtonClassName = `card__delete ${isOwner ? 'card__delete' : ''}`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <div className="card__img-container">
        <img className="card__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      </div>
      <div className="card__footer">
        <h2 className="card__title">{card.name}</h2>
        <div className="like">
          <button type="button" className={likeButtonClassName} onClick={handleLikeClick}></button>
          <p className="like__counter">{card.likes.length}</p>
        </div>
      </div>
      {isOwner && <button className={deleteButtonClassName} type="button" onClick={handleDeleteClick}></button>}
    </li>
  );
}

export default Card;
