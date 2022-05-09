
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
showNavOnScroll()
showBackToTopButtonOnScroll()

activateMenuAtCurrentSection(home)
activateMenuAtCurrentSection(services)
activateMenuAtCurrentSection(about)
activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
const targetLine = scrollY + innerHeight / 2  


//VERIFICAR SE A SECAO PASSOU DA LINHA//
//QUAIS DADOS VOU PRECISAR?//

const sectionTop = home.offsetTop 
const sectionHeight = home.offsetHeight
const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

const sectionEndAt = sectionTop + sectionHeight
const sectionEndPassedTargetLine = sectionEndAt <= 
targetLine


const sectionBoundAries = 
sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

constId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active')
 if (sectionBoundaries) {
menuElement.classList.add('active')
 }
}

//O TOP CHEGOU OU ULTRAPASSOU A LINHA-ALVO//

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .numbers,
#services
#services header
#services .card
#about
#about header
#about .content`)
