import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import TasksCount from './components/TasksCount';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';
import { saveTaskStorage, getTasks, deleteTaskStorage } from './Storage';



function App() {

  const [tasks, setTasks] = useState(getTasks());
  const [showModal, setshowModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [tasksCount, setTasksCount] = useState([]);

  function loadTasks() {
    const allTasks = getTasks();

    if(allTasks.length === 0) {

      setStatusMessage('Você não tem tarefas!');

    } else {
      
      setStatusMessage('');
    
    }

    setTasksCount(allTasks.length);
    setTasks(allTasks);
  }

  function deleteTask(id) {
    deleteTaskStorage(id, tasks);
    loadTasks();
  }

  function saveTask(description, date) {

    if(!description || !date) {
      alert('Preencha todos os campos!');
      return;
    } else {
      saveTaskStorage(tasks, description, date);
      loadTasks();
      setshowModal(false);
    }

}

  useEffect(() => {
    loadTasks()
  }, []);

  return (
    <div className="container">
      
      <Header />

      <main className='content'>

        <div className='content-header'>

          <Button 
          title='+ Adicionar Tarefa'
          classname='adicionar-task'
          onclick={() => setshowModal(true)}
          />
          <TasksCount Tasks={tasksCount} />
        </div>

       <Table
       tasks={tasks}
       deleteTask={deleteTask}
       />

       <h2 className='status-message'> { statusMessage } </h2>    
      </main>

      <Footer />

      {showModal && 
      <Modal 
      closemodal={setshowModal} 
      saveTask={saveTask}
      />}
      

    </div>
  );
}

export default App;
