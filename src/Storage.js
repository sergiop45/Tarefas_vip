export function saveTaskStorage(tasks, description, date) {

    const newTask = {
        date: new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        description: description,
        id: Math.floor(Math.random() * 1000),
    }

    localStorage.setItem('@keyTasks', JSON.stringify([...tasks, newTask]));

}

export function getTasks() {
    return JSON.parse(localStorage.getItem('@keyTasks'))  || [];
}

export function deleteTaskStorage(id, tasks) {
    const filteredTasks = tasks.filter(task => task.id !== id);

    localStorage.setItem('@keyTasks', JSON.stringify(filteredTasks));
}