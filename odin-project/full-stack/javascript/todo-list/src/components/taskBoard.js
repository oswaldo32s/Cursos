import editImg from '../img/edit.png'

export default function TaskBoard(taskType) {
    // Grab main container and clear content
    const taskBoard = document.querySelector('.main-task-container')
    taskBoard.innerHTML = ''

    // Create the table
    const taskTable = document.createElement('table')
    taskTable.classList.add('task-table')

    // Create table Header
    const taskHeader = document.createElement('thead')
    const tasktitle = document.createElement('th')
    tasktitle.textContent = 'Title'
    const taskDescription = document.createElement('th')
    taskDescription.textContent = 'Description'
    const taskPriority = document.createElement('th')
    taskPriority.textContent = 'Priority'
    const taskDueDate = document.createElement('th')
    taskDueDate.textContent = 'Due Date'
    const taskEdit = document.createElement('th')
    taskEdit.textContent = 'Edit'

    taskHeader.appendChild(tasktitle)
    taskHeader.appendChild(taskDescription)
    taskHeader.appendChild(taskPriority)
    taskHeader.appendChild(taskDueDate)
    taskHeader.appendChild(taskEdit)

    // Append header to table
    taskTable.appendChild(taskHeader)

    const taskBody = document.createElement('tbody')
    taskBody.classList.add('table-body')

    JSON.parse(localStorage.tasks).filter(task => task.project == taskType).forEach(task => {
        const tableRow = document.createElement('tr')
        const rowOne = document.createElement('td')
        const rowTwo = document.createElement('td')
        const rowThree = document.createElement('td')
        const rowFour = document.createElement('td')
        const rowFive = document.createElement('td')
        const rowEdit = new Image()
        rowEdit.src = editImg
        rowFive.appendChild(rowEdit)
        rowEdit.classList.add('edit-img')
        rowFive.classList.add('edit-cell')

        rowOne.textContent = task.title
        rowTwo.textContent = task.description
        rowThree.textContent = task.priority
        rowFour.textContent = task.dueDate

        tableRow.appendChild(rowOne)
        tableRow.appendChild(rowTwo)
        tableRow.appendChild(rowThree)
        tableRow.appendChild(rowFour)
        tableRow.appendChild(rowFive)

        taskBody.appendChild(tableRow)

    });
    taskTable.appendChild(taskBody)
    taskBoard.appendChild(taskTable)
}