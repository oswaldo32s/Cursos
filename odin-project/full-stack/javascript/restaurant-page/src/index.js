import './style.css';
import HomePage from './Pages/home';
import Burger from './img/restaurant-icon.png'

const webLogo = document.querySelector('.weblogo')
const Logo = new Image()
Logo.src = Burger
Logo.classList.add('logo')

webLogo.appendChild(Logo)

HomePage()