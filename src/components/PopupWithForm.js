import React from 'react';

function PopupWithForm({ name, title, children, buttonText, isOpen, onSubmit, onClose }) {
  return (
    <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <form className="popup__form" onSubmit={onSubmit} noValidate>
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
