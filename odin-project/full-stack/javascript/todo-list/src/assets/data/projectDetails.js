import {format} from "date-fns"

export const projectDetails = [
  {
    taskID : 1,
    taskTitle : 'Add functionality to buttons',
    taskDescription : 'Add the functionality to all the button on the To Do List',
    duedate : format(new Date(2024, 10, 30), 'MM-dd-yyyy'),
    priority : 'High',
    project : 'To Do List',
    projectID : 3
  },
  {
    taskID : 2,
    taskTitle : 'Add log in page',
    taskDescription : 'create a log in website to practice form validation',
    duedate : format(new Date(2024, 11, 10), 'MM-dd-yyyy'),
    priority : 'Low',
    project : 'To Do List',
    projectID : 3
  },
]

export const projectHeader = [
  {
    header : 'Title'
  },
  {
    header : 'Description'
  },
  {
    header : 'Priority'
  },
  {
    header : 'Due Date'
  }
]