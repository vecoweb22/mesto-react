import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';
import editIcon from '../images/editIcon.svg';
import addIcon from '../images/addIcon.svg';

function Main({ cards, onAddPlace, onEditProfile, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <button
            className="profile__edit-avatar"
            type="button"
            onClick={() => {
              onEditAvatar(true);
            }}
          ></button>
          <img src={currentUser.avatar} className="profile__img" alt="аватар" />
        </div>
        <h1 className="profile__title">{currentUser.name}</h1>
        <p className="profile__subtitle">{currentUser.about}</p>
        <button
          type="button"
          className="profile__edit-button"
          onClick={() => {
            onEditProfile(true);
          }}
        >
          <img src={editIcon} alt="редактировать" className="profile__edit-icon" />
        </button>
        <button
          type="button"
          className="profile__add-button"
          onClick={() => {
            onAddPlace(true);
          }}
        >
          <img src={addIcon} alt="добавить" className="profile__add-icon" />
        </button>
      </section>
      <section className="gallery" aria-label="Фотогалерея">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardDelete={onCardDelete} onCardClick={onCardClick} onCardLike={onCardLike} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
