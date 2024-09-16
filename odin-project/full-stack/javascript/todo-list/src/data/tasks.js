import {format} from 'date-fns'

export const defaultTasks = [
    {
        title: 'Create To Do Website',
        description: "Follow odin's instructions to create To Do List website and get the help needed",
        dueDate: format(new Date(2024, 9, 15), 'MM/dd/yyyy'),
        priority: 'High',
        project: 'default'
    },
    {
        title: 'Learn How to use LocalStorage',
        description: "In order to create the To Do list we need to learn how to use LocalStorage to store the user new tasks and projects",
        dueDate: format(new Date(2024, 8, 31), 'MM/dd/yyyy'),
        priority: 'High',
        project: 'default'
    },
    {
        title: 'Learn How to use date-fns',
        description: "In order to create the To Do list we need to learn how to use date-fns to change the formating of the dates",
        dueDate: format(new Date(2024, 8, 31), 'MM/dd/yyyy'),
        priority: 'High',
        project: 'default'
    }
]
