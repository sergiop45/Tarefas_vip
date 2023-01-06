import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import './table.css';



const Table = ({ tasks, deleteTask }) => {
  
  const [task, setTask] = useState([])
  
useEffect(() => {
    setTask(tasks);
}, [tasks]);
   
  return (
    <table>

        <thead>

            <tr>
                <th>Descrição</th>
                <th>Data</th>
                <th>Ações</th>
            </tr>

        </thead>

        <tbody>

            { 
                task.map(task => <TableRow key={task.id} task={task} deletetask={deleteTask}/>)
            }

        </tbody>

    </table>
  )
}

export default Table;