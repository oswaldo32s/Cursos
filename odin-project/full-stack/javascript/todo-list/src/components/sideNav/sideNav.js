import { newElement } from "../../functions/newElement";
import projectNav from "./projectNav";

export default function sideNav() {
  const navSection = newElement('section', '', ['nav-section'])

  navSection.appendChild(projectNav())

  return navSection
}