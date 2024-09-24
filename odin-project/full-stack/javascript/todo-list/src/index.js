import './style.css';
import newElement from './functions/newElement';
import MainHeader from './components/mainHeader';
import mainPage from './components/mainPage';

// get a big component as my website
function myApp() {
  const website = newElement('div', '', ['main-page'])

  website.appendChild(MainHeader())
  website.appendChild(mainPage())

  return website
}

document.body.appendChild(myApp());