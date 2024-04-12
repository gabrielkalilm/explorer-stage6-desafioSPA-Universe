const homeLink = document.getElementById('homeLink');
const universeLink = document.getElementById('universeLink');
const explorationLink = document.getElementById('explorationLink');
const body = document.querySelector('body');

homeLink.addEventListener('click', (event) => {
  body.classList.remove('explorationBg')
  body.classList.remove('universeBg')
  body.classList.add('homeBg')
})

universeLink.addEventListener('click', (event) => {
  body.classList.remove('homeBg')
  body.classList.remove('explorationBg')
  body.classList.add('universeBg')
})

explorationLink.addEventListener('click', (event) => {
  body.classList.remove('universeBg')
  body.classList.remove('homeBg')
  body.classList.add('explorationBg')
})
