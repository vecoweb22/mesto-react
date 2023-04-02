import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ onClose, onAddPlace, onLoading, isOpen }) {
  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');

  useEffect(() => {
    setPlaceName('');
    setPlaceLink('');
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }

  function handleChangePlaceName(e) {
    setPlaceName(e.target.value);
  }

  function handleChangePlaceLink(e) {
    setPlaceLink(e.target.value);
  }

  return (
    <PopupWithForm name="place" title="Новое место" buttonText={onLoading ? `Сохранение` : `Создать`} onSubmit={handleSubmit} onClose={onClose} isOpen={isOpen}>
      <input
        required
        type="text"
        id="popup__placename"
        className="popup__input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        name="name"
        value={placeName}
        onChange={handleChangePlaceName}
      />
      <span className="popup__placename-error error" />
      <input
        required
        type="url"
        id="popup__placeimg"
        className="popup__input"
        placeholder="Ссылка на фото"
        name="link"
        value={placeLink}
        onChange={handleChangePlaceLink}
      />
      <span className="popup__placeimg-error error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
