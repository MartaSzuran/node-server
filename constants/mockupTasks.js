const randFunc = require('../utils/randomFunction');

const mockupTasks = [
    { id: randFunc(), title: "add search feature", author: "Alice", description: "Change filter function", type: 'toDo'},
    { id: randFunc(), title: "create edition", author: "John", description: "Work with inputs inside the modal", type: 'done'},
    { id: randFunc(), title: "change layout", author: "Jan", description: "Change main page layout", type: 'inProgress'},
    { id: randFunc(), title: "some title", author: "John", description: "another description", type: 'toDo'},
    { id: randFunc(), title: "Cook dinner for Family", author: "John", description: "curry and chicken", type: 'inProgress'},
    { id: randFunc(), title: "Buy dress", author: "Alice", description: "some description", type: 'done'},
];

module.exports = mockupTasks;