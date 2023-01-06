import React from 'react';

const TasksCount = ({Tasks}) => {
  return (
    <div className='total-tasks'>
        <h2>{Tasks} Tarefas Registradas</h2>
    </div>
  )
}

export default TasksCount;