import { getAllDataName } from './lib'

export default function setupCards() {
  const cards = getAllDataName('card')
  cards.forEach(addCardLogic)
}

function addCardLogic(card) {
  addBookmarkLogic(card)
  addAnswerLogic(card)
}

function addBookmarkLogic(card) {
  const bookmarkIcon = card.querySelector('[data-name="bookmark-card-icon"]')
  bookmarkIcon.addEventListener('click', toggleBookmark)
}

function toggleBookmark(event) {
  event.target.classList.toggle('card__bookmark-icon--active')
}

function addAnswerLogic(card) {
  const answerText = card.querySelector('[data-name="answer-card"')
  const showAnswerButton = card.querySelector('[data-name="toggle-btn"]')

  showAnswerButton.addEventListener('click', () => {
    const currentButtonText = showAnswerButton.textContent.trim()

    answerText.classList.toggle('hidden')
    showAnswerButton.textContent = currentButtonText === 'Show Answer' ? 'Hide Answer' : 'Show Answer'
  })
}

// const bookmarkCardIcon = document.querySelectorAll('[data-name=bookmark-card-icon]')

// bookmarkCardIcon.forEach((item) => {
//   item.addEventListener('click', () => {
//     item.classList.toggle('card__bookmark-icon--active')
//   })
// })