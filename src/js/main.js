//HEADINGS
const questionHeading = document.querySelector('[data-js=question-heading]')
const bookmarkHeading = document.querySelector('[data-js=bookmark-heading]')
const createHeading = document.querySelector('[data-js=create-heading]')
const profileHeading = document.querySelector('[data-js=profile-heading]')
//CONTENTBOX
const questionContent = document.querySelector('[data-js=question-content]')
const bookmarkContent = document.querySelector('[data-js=bookmark-content]')
const createContent = document.querySelector('[data-js=create-content]')
const profileContent = document.querySelector('[data-js=profile-content]')
// NAV-ICONS
const questionNavIcon = document.querySelector('[data-js=question-navicon]')
const bookmarkNavIcon = document.querySelector('[data-js=bookmark-navicon]')
const createNavIcon = document.querySelector('[data-js=create-navicon]')
const profileNavIcon = document.querySelector('[data-js=profile-navicon]')
// CARD-BOOKMARK-ICON
const bookmarkCardIcon = document.querySelector('[data-js=bookmark-cardicon]')
// FORM-BUTTON
const resetButton = document.querySelector('[data-js=reset-btn]')
// ANSWER-TOGGLE-BUTTON
const toggleButton = document.querySelector('[data-js=toggle-btn]')
const answerCard = document.querySelector('[data-js=answer-card]')
// EVENT-LISTENER
questionNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(questionContent, questionHeading)
  activateIcon(questionNavIcon)
})

bookmarkNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(bookmarkContent, bookmarkHeading)
  activateIcon(bookmarkNavIcon)
})

createNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(createContent, createHeading)
  activateIcon(createNavIcon)
})

profileNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(profileContent, profileHeading)
  activateIcon(profileNavIcon)
})

bookmarkCardIcon.addEventListener('click', () =>
  bookmarkCardIcon.classList.toggle('card__bookmark-icon--active')
)

resetButton.addEventListener('click', () =>
  document.querySelector('.form').reset()
)

toggleButton.addEventListener('click', () =>
  answerCard.classList.toggle('hidden')
)
// FUNCTIONS
function hideAllPages() {
  questionHeading.classList.add('hidden')
  bookmarkHeading.classList.add('hidden')
  createHeading.classList.add('hidden')
  profileHeading.classList.add('hidden')
  questionContent.classList.add('hidden')
  bookmarkContent.classList.add('hidden')
  createContent.classList.add('hidden')
  profileContent.classList.add('hidden')
  questionNavIcon.classList.remove('navigation__icon--active')
  bookmarkNavIcon.classList.remove('navigation__icon--active')
  createNavIcon.classList.remove('navigation__icon--active')
  profileNavIcon.classList.remove('navigation__icon--active')
}

function showContent(content, heading) {
  content.classList.remove('hidden')
  heading.classList.remove('hidden')
}

function activateIcon(icon) {
  icon.classList.add('navigation__icon--active')
}
