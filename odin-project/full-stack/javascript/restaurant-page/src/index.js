import './style.css';
import HomePage from './Pages/Home/home';
import Burger from './img/restaurant-icon.png'
import MenuPage from './Pages/Menu/menu';
import AboutPage from './Pages/AboutUs/aboutUs';

const webLogo = document.querySelector('.weblogo')
const Logo = new Image()
Logo.src = Burger
Logo.classList.add('logo')

webLogo.appendChild(Logo)

HomePage()

const homeBtn = document.querySelector('.home-btn')
homeBtn.addEventListener('click', HomePage)
const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click', MenuPage)
const AboutUs = document.querySelector('.about-btn')
AboutUs.addEventListener('click', AboutPage)