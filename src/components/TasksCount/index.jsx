import React from 'react';

const TasksCount = ({Tasks}) => {
  return (
    <div className='Total-Tasks'>
        <h2>{Tasks} Tarefas Registradas</h2>
    </div>
  )
}

export default TasksCount;