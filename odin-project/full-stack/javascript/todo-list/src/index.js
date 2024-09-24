import './style.css';
import { newElement } from './functions/newElement';
import MainHeader from './components/mainHeader';

// get a big component as my website
function myApp() {
  const website = newElement('div', '', ['main-page'])

  website.appendChild(MainHeader())

  return website
}

document.body.appendChild(myApp());