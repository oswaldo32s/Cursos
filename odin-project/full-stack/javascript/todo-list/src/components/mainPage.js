import { newElement } from "../functions/newElement";
import sideNav from "./sideNav/sideNav";

export default function mainPage() {
  const mainPage = newElement('main', '', ['main-section'])

  // Side Navigation
  mainPage.appendChild(sideNav())

  return mainPage
}