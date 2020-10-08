// IMPORTS
import { getDataName } from './lib'
//HEADINGS
const questionHeading = getDataName('question-heading')
const bookmarkHeading = getDataName('bookmark-heading')
const createHeading = getDataName('create-heading')
const profileHeading = getDataName('profile-heading')
//CONTENTBOX
const questionContent = getDataName('question-content')
const bookmarkContent = getDataName('bookmark-content')
const createContent = getDataName('create-content')
const profileContent = getDataName('profile-content')
// NAV-ICONS
const questionNavIcon = getDataName('question-nav-icon')
const bookmarkNavIcon = getDataName('bookmark-nav-icon')
const createNavIcon = getDataName('create-nav-icon')
const profileNavIcon = getDataName('profile-nav-icon')
// CARD-BOOKMARK-ICON
const bookmarkCardIcon = document.querySelectorAll(
  '[data-name=bookmark-card-icon]'
)
// FORM-BUTTON
const resetButton = getDataName('reset-btn')
// ANSWER-TOGGLE
const toggleButton = getDataName('toggle-btn')
const answerCard = getDataName('answer-card')
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

// console.clear()

// const pages = document.querySelectorAll('[data-js="pages"] > *')
// const navLinks = document.querySelectorAll('[data-js="nav"] > *')

// navLinks.forEach(addNavigationLogic)

// function addNavigationLogic(navLink) {
//   navLink.addEventListener('click', updateNavigation)
// }

// function updateNavigation(event) {
//   event.preventDefault()

//   const clickedLink = event.target
//   const targetPageName = clickedLink.dataset.name

//   pages.forEach(page => {
//      const pageName = page.dataset.name
//      page.classList.toggle('hidden', pageName !== targetPageName)
//   })

//   navLinks.forEach(navLink => {
//     navLink.classList.toggle('active', navLink === clickedLink)
//   })
// }
