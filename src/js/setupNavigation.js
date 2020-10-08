export default function setupNavigation() {
  const navLinks = document.querySelectorAll('[data-name="navigation"] > *')
  const headings = document.querySelectorAll('[data-name="heading"] > *')
  const pages = document.querySelectorAll('[data-js="content"]')

  navLinks.forEach(addNavigationLogic)

  function addNavigationLogic(navLink) {
    navLink.addEventListener('click', updateNavigation)
  }

  function updateNavigation(event) {
    const clickedLink = event.currentTarget
    const targetPageName = clickedLink.dataset.name

    pages.forEach((page) => {
      const pageName = page.dataset.name
      page.classList.toggle('hidden', pageName !== targetPageName)
    })

    headings.forEach((heading) => {
      const headingName = heading.dataset.name
      heading.classList.toggle('hidden', headingName !== targetPageName)
    })

    navLinks.forEach((navLink) => {
        navLink.classList.toggle(
        'navigation__icon--active',
        navLink === clickedLink
      )
    })
  }
}
