import React from 'react';

const TableRow = ({task}) => {
  return (
    <tr>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>X</td>
    </tr>
  )
}

export default TableRow;