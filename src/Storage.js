export function saveTaskStorage(description, date) {

    const newTask = {
        date: new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        description: description,
        id: Math.floor(Math.random() * 1000),
    }

    localStorage.setItem(newTask.id, JSON.stringify([newTask]));

}