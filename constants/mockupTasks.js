const generateId = require('../utils/generateId');

const mockupTasks = [
    { id: generateId(), title: "add search feature", author: "Alice", description: "Change filter function", type: 'toDo'},
    { id: generateId(), title: "create edition", author: "John", description: "Work with inputs inside the modal", type: 'done'},
    { id: generateId(), title: "change layout", author: "Jan", description: "Change main page layout", type: 'inProgress'},
    { id: generateId(), title: "some title", author: "John", description: "another description", type: 'toDo'},
    { id: generateId(), title: "Cook dinner for Family", author: "John", description: "curry and chicken", type: 'inProgress'},
    { id: generateId(), title: "Buy dress", author: "Alice", description: "some description", type: 'done'},
];

module.exports = mockupTasks;