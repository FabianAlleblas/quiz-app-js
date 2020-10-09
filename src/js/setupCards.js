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
  event.currentTarget.classList.toggle('card__bookmark-icon--active')
}

function addAnswerLogic(card) {
  const answerText = card.querySelector('[data-name="answer-card"')
  const answerButton = card.querySelector('[data-name="toggle-btn"]')

  answerButton.addEventListener('click', () => {
    toggleAnswerButton(answerButton)
    answerText.classList.toggle('hidden')
  })
}

function toggleAnswerButton(answerButton){
  const currentButtonText = answerButton.textContent.trim()
  answerButton.textContent = currentButtonText === 'Show Answer' ? 'Hide Answer' : 'Show Answer'
}