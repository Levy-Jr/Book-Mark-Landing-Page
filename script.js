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
    const parentButtonElement = button.closest('.accordion-section__faq')
    
    parentButtonElement.querySelector('[data-accordion-section__p]').classList.contains('hidden') ? button.setAttribute('aria-expanded', true) : button.setAttribute('aria-expanded', false)

    parentButtonElement.querySelector('[data-accordion-section__p]').classList.toggle('hidden')

    button.querySelector('[data-icon-arrow]').classList.toggle('active')
  })
})

/* FORM VALIDATION */

const form = document.querySelector('[data-form]')

const inputEmail = document.querySelector('[data-input-email]')
const textError = document.querySelector('.textError')

const inputButton = document.querySelector('[data-input-submit]')

const checkInput = () => {
  const emailValue = inputEmail.value.trim()

  if(emailValue == ""){
    setErrorFor(inputEmail, "Email cannot be blank")
  } else if(!validateUserEmail(emailValue)) {
    setErrorFor(inputEmail, "Whoops, make sure it's an email")
  } else if(validateUserEmail(emailValue)) {
    setSucessFor(inputEmail)
  }
}

const setSucessFor = (input) => {
  const parentElement = input.closest('.inputText-wrapper')
  if(parentElement.hasAttribute('data-input-error')){
    delete parentElement.dataset.inputError
  }
}

const setErrorFor = (input, message) => {
  const parentElement = input.closest('.inputText-wrapper')
  parentElement.dataset.inputError = true
  input.placeholder = 'example@email/com'
  textError.innerText = message
}

const validateUserEmail = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInput()
})