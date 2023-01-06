import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TableRow = ({task, deletetask}) => {
  return (
    <tr>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>
        <FaTrash 
        size={20} color='#DE3F5E' 
        className='icon-delete'
        onClick={() => deletetask(task.id)} 
        /></td>
    </tr>
  )
}

export default TableRow;