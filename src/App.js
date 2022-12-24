import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import TasksCount from './components/TasksCount';

function App() {
  return (
    <div className="container">
      
      <Header />

      <main className='content'>

        <div className='content-header'>

          <Button 
          title='+ Adicionar Tarefa'
          classname='adicionar-task'
          onclick={() => {alert('teste button')}}
          />
          <TasksCount Tasks={10} />
        </div>

       <Table />
       
      </main>

      <Footer />

    </div>
  );
}

export default App;
