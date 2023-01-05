import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import TasksCount from './components/TasksCount';
import Modal from './components/Modal';
import { useState } from 'react';
import { saveTaskStorage } from './Storage';



function App() {

  const [showModal, setshowModal] = useState(false);

  function saveTask(description, date) {

    if(!description || !date) {
      alert('Preencha todos os campos!');
      return;
    } else {
      saveTaskStorage(description, date);
    }

}

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
          <TasksCount Tasks={10} />
        </div>

       <Table />
       
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
