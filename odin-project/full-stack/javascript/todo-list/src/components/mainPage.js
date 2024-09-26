import { projectDetails, projectHeader } from "../assets/data/projectDetails";
import newElement from "../functions/newElement";
import mainTable from "./mainTable";
import sideNav from "./sideNav/sideNav";

export default function mainPage() {
  const mainPage = newElement('main', '', ['main-section'])

  // Side Navigation
  mainPage.appendChild(sideNav())

  // Main Table
  mainPage.appendChild(mainTable(projectHeader, projectDetails))

  return mainPage
}