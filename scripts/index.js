const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close-button');
const popupOpenBtn = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup__form');
const formNameInput = formElement.querySelector('.popup__input_user_name');
const formJobInput = formElement.querySelector('.popup__input_user_job');
const profileName = document.querySelector('.profile__username');
const profileJob = document.querySelector('.profile__userjob');

function openPopup() {
    popupElement.classList.add('popup_opened');
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

popupOpenBtn.addEventListener('click', function() {
  formNameInput.value = profileName.textContent;
  formJobInput.value = profileJob.textContent;
  openPopup ();
});

popupCloseBtn.addEventListener('click', closePopup);

function handleFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = formNameInput.value;
    profileJob.textContent = formJobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);




