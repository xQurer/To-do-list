document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();

        if (taskText) {
            const todoItem = document.createElement('li');

            // Create checkbox for completion status
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');
            checkbox.addEventListener('change', toggleCompletion);

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTask);

            // Add elements to the task item
            todoItem.appendChild(checkbox);
            todoItem.appendChild(document.createTextNode(taskText));
            todoItem.appendChild(deleteButton);

            // Append the task to the list
            todoList.appendChild(todoItem);
            inputField.value = ''; // Clear input field
        }
    });

    function toggleCompletion(event) {
        const todoItem = event.target.parentElement;
        todoItem.classList.toggle('completed');
    }

    function deleteTask(event) {
        const todoItem = event.target.parentElement;
        todoItem.remove();
    }
});
