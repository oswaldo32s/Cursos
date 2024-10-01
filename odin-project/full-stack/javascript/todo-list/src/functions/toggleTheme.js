export default function toggleTheme() {
  const lightBtn = document.querySelector('.light-btn')
  const darkBtn = document.querySelector('.dark-btn')

  lightBtn.classList.toggle('hidden')
  darkBtn.classList.toggle('hidden')

  const htmlRoot = document.querySelector('html')
  htmlRoot.classList.toggle('dark')
  htmlRoot.classList.toggle('light')
}