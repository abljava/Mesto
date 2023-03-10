const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close-button');
const popupOpenBtn = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_name');
const jobInput = formElement.querySelector('.popup__input_job');

function openPopup() {
    popupElement.classList.add('popup_opened');
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

function handleFormSubmit(e) {
    e.preventDefault();
    document.querySelector('.profile__username').textContent = nameInput.value;
    document.querySelector('.profile__userjob').textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 




