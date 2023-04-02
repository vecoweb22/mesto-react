import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ onLoading, onClose, onUpdateAvatar, isOpen }) {
  const avatarRef = React.useRef(null);

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText={onLoading ? `Сохранение` : `Сохранить`}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
    >
      <input
        required
        name="avatar"
        id="avatarlink"
        className="popup__input"
        type="url"
        placeholder="Ссылка на картинку"
        onChange={handleChangeAvatar}
        ref={avatarRef}
      />
      <span className="avatarlink-error error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
