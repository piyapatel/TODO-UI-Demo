import React from 'react'
import TaskList from '../Comman/TaskList'
import TopBar from '../Comman/TopBar'

const CenterComponent = () => {
  return (
    <div className='center-content'>
        <TopBar/>
        <TaskList/>
        <div class="task-btn">
            <button>New Task</button>
        </div>
    </div>
  )
}

export default CenterComponent