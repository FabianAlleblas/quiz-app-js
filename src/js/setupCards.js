import { getDataName, getAllDataName } from './lib'

export default function setupCards() {
  const cards = getAllDataName(card)
  cards.forEach(addCardLogic)
}

function addCardLogic(card) {
  addBookmarkLogic(card)
  addAnswerLogic(card)
}

function addBookmarkLogic(card) {
  const bookmarkIcon = card.getDataName('bookmark-card-icon')
  bookmarkIcon.addEventListener('click', toggleBookmark)
}
