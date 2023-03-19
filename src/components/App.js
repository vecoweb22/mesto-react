import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да"></PopupWithForm>

        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input" name="avatar" id="avatarlink" type="url" placeholder="Ссылка на картинку" required />
          <span className="avatarlink-error error" />
        </PopupWithForm>

        <PopupWithForm name="popup-user" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input" type="text" placeholder="Имя" minLength="2" maxLength="40" name="name" id="popup__username" required />
          <span className="popup__username-error error" />
          <input className="popup__input" type="text" placeholder="О себе" minLength="2" maxLength="200" name="about" id="popup__userjob" required />
          <span className="popup__userjob-error error" />
        </PopupWithForm>

        <PopupWithForm name="popup-place" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input" type="text" placeholder="Название" minLength="2" maxLength="30" name="name" id="popup__placename" required />
          <span className="popup__placename-error error" />
          <input className="popup__input" type="url" placeholder="Ссылка на картинку" name="link" id="popup__placeimg" required />
          <span className="popup__placeimg-error error" />
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
