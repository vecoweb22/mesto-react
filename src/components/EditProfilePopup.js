import React, { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ onClose, onUpdateUser, onLoading, isOpen }) {
  const currentUser = useContext(CurrentUserContext);
  const [about, setAbout] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm
      name="user"
      title="Редактировать профиль"
      buttonText={onLoading ? `Сохранение` : `Сохранить`}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
    >
      <input
        required
        name="name"
        id="popup__username"
        className="popup__input"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="popup__username-error error" />
      <input
        required
        name="about"
        id="popup__userjob"
        className="popup__input"
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={about || ''}
        onChange={handleChangeAbout}
      />
      <span className="popup__userjob-error error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
