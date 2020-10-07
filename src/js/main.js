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
const questionIcon = document.querySelector('[data-js=question-icon]')
const bookmarkIcon = document.querySelector('[data-js=bookmark-icon-nav]')
const createIcon = document.querySelector('[data-js=create-icon]')
const profileIcon = document.querySelector('[data-js=profile-icon]')
// EVENT-LISTENER
questionIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(questionContent, questionHeading)
  activateIcon(questionIcon)
})

bookmarkIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(bookmarkContent, bookmarkHeading)
  activateIcon(bookmarkIcon)
})

createIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(createContent, createHeading)
  activateIcon(createIcon)
})

profileIcon.addEventListener('click', () => {
  hideAllPages()
  showContent(profileContent, profileHeading)
  activateIcon(profileIcon)
})
// FUNCTIONS
function hideAllPages() {
  console.log('Hello')
  questionHeading.classList.add('hidden')
  bookmarkHeading.classList.add('hidden')
  createHeading.classList.add('hidden')
  profileHeading.classList.add('hidden')
  questionContent.classList.add('hidden')
  bookmarkContent.classList.add('hidden')
  createContent.classList.add('hidden')
  profileContent.classList.add('hidden')
  questionIcon.classList.remove('navigation__icon--active')
  bookmarkIcon.classList.remove('navigation__icon--active')
  createIcon.classList.remove('navigation__icon--active')
  profileIcon.classList.remove('navigation__icon--active')
}

function showContent(content, heading) {
  console.log('content')
  content.classList.remove('hidden')
  heading.classList.remove('hidden')
}

function activateIcon(icon) {
  console.log('icon')
  icon.classList.add('navigation__icon--active')
}
