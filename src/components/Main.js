import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';
import editIcon from '../images/editIcon.svg';
import addIcon from '../images/addIcon.svg';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((profileInfo) => {
        setUserName(profileInfo.name);
        setUserDescription(profileInfo.about);
        setUserAvatar(profileInfo.avatar);
      })
      .catch((err) => console.log(err));

    api
      .getCards()
      .then((cardsData) => {
        setCards(
          cardsData.map((data) => ({
            cardId: data._id,
            name: data.name,
            link: data.link,
            likes: data.likes,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

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
          <img src={userAvatar} className="profile__img" alt="аватар" />
        </div>
        <h1 className="profile__title">{userName}</h1>
        <p className="profile__subtitle">{userDescription}</p>
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
      <section className="gallery">
        <ul className="gallery__list">
          {cards.map((card) => (
            <Card key={card.cardId} name={card.name} link={card.link} likes={card.likes} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
