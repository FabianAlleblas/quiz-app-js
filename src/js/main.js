//HEADINGS
const questionHeading = getModule('question-heading')
const bookmarkHeading = getModule('bookmark-heading')
const createHeading = getModule('create-heading')
const profileHeading = getModule('profile-heading')
//CONTENTBOX
const questionContent = getModule('question-content')
const bookmarkContent = getModule('bookmark-content')
const createContent = getModule('create-content')
const profileContent = getModule('profile-content')
// NAV-ICONS
const questionNavIcon = getModule('question-navicon')
const bookmarkNavIcon = getModule('bookmark-navicon')
const createNavIcon = getModule('create-navicon')
const profileNavIcon = getModule('profile-navicon')
// CARD-BOOKMARK-ICON
const bookmarkCardIcon = document.querySelectorAll(
  '[data-js=bookmark-cardicon]'
)
// FORM-BUTTON
const resetButton = getModule('reset-btn')
// ANSWER-TOGGLE
const toggleButton = getModule('toggle-btn')
const answerCard = getModule('answer-card')
// EVENT-LISTENER
questionNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(questionHeading, questionContent)
  activateIcon(questionNavIcon)
})

bookmarkNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(bookmarkHeading, bookmarkContent)
  activateIcon(bookmarkNavIcon)
})

createNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(createHeading, createContent)
  activateIcon(createNavIcon)
})

profileNavIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(profileHeading, profileContent)
  activateIcon(profileNavIcon)
})

//bookmarkCardIcon.addEventListener('click', () =>
//  bookmarkCardIcon.classList.toggle('card__bookmark-icon--active')
//)

bookmarkCardIcon.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('card__bookmark-icon--active')
  })
})

resetButton.addEventListener('click', () =>
  document.querySelector('.form').reset()
)

toggleButton.addEventListener('click', () =>
  answerCard.classList.toggle('hidden')
)
// FUNCTIONS
function getModule(name) {
  const selector = `[data-js=${name}]`
  return document.querySelector(selector)
}

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

function showContent(heading, content) {
  heading.classList.remove('hidden')
  content.classList.remove('hidden')
}

function activateIcon(icon) {
  icon.classList.add('navigation__icon--active')
}
