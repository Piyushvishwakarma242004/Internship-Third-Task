function addTask() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const taskText = taskInput.value;
    const taskDate = dateInput.value;

    if (taskText === '' || taskDate === '') {
        alert('Please enter both task and date.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.className = 'task-text';
    taskContent.textContent = `${taskText} - ${taskDate}`;
    listItem.appendChild(taskContent);

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => {
        listItem.classList.toggle('completed');
    };
    buttons.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        const newText = prompt('Edit task:', taskText);
        const newDate = prompt('Edit date and time:', taskDate);
        if (newText !== null && newDate !== null) {
            taskContent.textContent = `${newText} - ${newDate}`;
        }
    };
    buttons.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
    };
    buttons.appendChild(deleteButton);

    listItem.appendChild(buttons);
    taskList.appendChild(listItem);

    taskInput.value = '';
    dateInput.value = '';
}
