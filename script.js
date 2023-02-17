/* NAV BUTTON */

const menuButton = document.querySelector('[data-menu-button]')

const toggleMenu = () => {
  const menuElements = document.querySelectorAll('[data-menu]') 

  menuElements.forEach(e => {
    e.toggleAttribute('data-menu-visible')
  })
}

menuButton.addEventListener('click', () => {
  toggleMenu()
})

/* TAB PANEL */

const changeActiveElements = (element) => {
  const tabButtonsParent = document.querySelector('[data-tab-buttons-parent]')
  const activeElement = tabButtonsParent.querySelectorAll('.active')
  if(activeElement) {
    activeElement.forEach(activeEl => activeEl.classList.remove('active'))
  }

  element.classList.add('active')
}

const changeTabPanel = (index) => {
  const tabPanelsParent = document.querySelector('[data-tab-panel-wrapper]')
  const activePanel = tabPanelsParent.querySelectorAll('.active') 
  if(activePanel) {
    activePanel.forEach(activePanel => activePanel.classList.remove('active'))
  }

  tabPanelsParent.children[index].classList.add('active')
}

const tabButtons = document.querySelectorAll('[data-tab-button]')

tabButtons.forEach((e, i) => {
  e.addEventListener('click', () => {
    if(!e.classList.contains('active')){
      changeActiveElements(e)
      changeTabPanel(i)
    }
})
})

/* FAQ */

const faqButton = document.querySelectorAll('[data-faq-button]')

faqButton.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.accordion-section__faq').querySelector('[data-accordion-section__p]').classList.toggle('hidden')
  })
})

/* FORM VALIDATION */

const form = document.querySelector('[data-form]')

const inputText = document.querySelector('[data-input-email]')
const inputButton = document.querySelector('[data-input-submit]')

const setSucessFor = (input, message) => {
  
}

const validateUserEmail = () => {

}

form.addEventListener('submit', e => {
  e.preventDefault()


})