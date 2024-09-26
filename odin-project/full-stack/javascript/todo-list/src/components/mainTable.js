import newElement from "../functions/newElement";

export default function mainTable(tableHeaders, TableData) {
  const mainTableSection = newElement('section', '', ['main-table-section'])

  const table = newElement('table', '', ['project-table'])
  const thead = newElement('thead', '', ['table-headers'])
  const tbody = newElement('tbody', '', ['table-body'])
  const trHeader = newElement('tr', '', ['header-row'])
  
  tableHeaders.forEach(header => {
    const th = newElement('th', header.header)
    trHeader.appendChild(th)
  });

  TableData.forEach(object => {
    const tr = newElement('tr', '', ['table-row'])
    const title = newElement('td', object.taskTitle)
    const description = newElement('td', object.taskDescription)
    const priority = newElement('td', object.priority)
    const duedate = newElement('td', object.duedate)

    tr.appendChild(title)
    tr.appendChild(description)
    tr.appendChild(priority)
    tr.appendChild(duedate)

    tbody.appendChild(tr)

  })

  thead.appendChild(trHeader)
  table.appendChild(thead)
  table.appendChild(tbody)
  mainTableSection.appendChild(table)

  return mainTableSection
}