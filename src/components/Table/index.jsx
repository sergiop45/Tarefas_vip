import React from 'react';
import TableRow from './TableRow';

const Tasks = [
    {
        id: 0,
        description: 'Estudar React',
        date: '22/03/2023'
    },
    {
        id: 0,
        description: 'Estudar React',
        date: '22/03/2023'
    }
]

const Table = () => {
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
                Tasks.map(task => <TableRow key={task.id} task={task}/>)
            }

        </tbody>

    </table>
  )
}

export default Table;