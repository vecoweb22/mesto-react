import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_opened-img ${card.link ? 'popup_opened' : ''}`}>
      <figure className="popup__screen">
        <img className="popup__screen-image" src={card.link} alt={card.name} />
        <figcaption className="popup__screen-caption">{card.name}</figcaption>
        <button className="popup__close-button" type="button" onClick={onClose} />
      </figure>
    </div>
  );
}

export default ImagePopup;
