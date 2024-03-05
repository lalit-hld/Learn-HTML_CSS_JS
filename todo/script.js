const tasks = [];
// { title: ____, completed: true }

const input = document.querySelector('#task-input');
const listItems = document.querySelector('#list-items');

// const addTasksToList = () => {
//     tasks.forEach(task => {

//     })
// }

input.addEventListener('keydown', function(event) {
    console.log(event.key);

    if (event.key === 'Enter') {
        const task = input.value;
        tasks.push({ title: task, completed: false });

        const liElement = document.createElement('li');
        liElement.innerText = task;

        listItems.appendChild(liElement);

    }
});

// create new task - done
// create new task with help of array, (hint: remove all tasks from html(listItems), then add all taks from tasks array)
// add a checkbox to each task
// mark a task completed
// add a delete button to each task
// on delete click remove that task
// add a edit button to each task
// on edit click as for a new value for that task

// CRUD - Create, Read, Update, Delete