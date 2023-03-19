import React from 'react';

function PopupWithForm({ name, title, children, buttonText, isOpen, onClose }) {
  return (
    <div className={`popup id=${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <form className="popup__form">
          <h3 className="popup__title">{title}</h3>
          {children}
          <button className="popup__save-button" type="submit">
            {buttonText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
