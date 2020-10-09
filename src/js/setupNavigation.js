export default function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-name="navigation"] > *')
  const heading = document.querySelector('[data-name="heading"]')
  const pages = document.querySelectorAll('[data-js="content"]')

  navLinks.forEach(addNavigationLogic)

  function addNavigationLogic(navLink) {
    navLink.addEventListener('click', updateNavigation)
  }

  function updateNavigation(event) {
    const clickedLink = event.currentTarget
    const targetPageName = clickedLink.dataset.name
    toggleHeadings(targetPageName)
  
    pages.forEach((page) => {
      const pageName = page.dataset.name
      page.classList.toggle('hidden', pageName !== targetPageName)
    })

    navLinks.forEach((navLink) => {
        navLink.classList.toggle(
        'navigation__icon--active',
        navLink === clickedLink
      )
    })
  }

  function toggleHeadings(targetPageName){
    targetPageName === 'bookmark' ? heading.textContent = 'Bookmarks' :
    targetPageName === 'question' ? heading.textContent = 'Quiz App' :
    targetPageName === 'create' ? heading.textContent = 'Create' : 
    targetPageName === 'profile' ? heading.textContent = 'Profile' : ''
  }
}
