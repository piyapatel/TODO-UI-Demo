import React from 'react'
import { TaskListData } from '../../services/data'

const TaskList = () => {
  return (
    <div className='tasklist-content'>
        {
            TaskListData.map((items)=>{
              return(
                <>
                <div className='tasklist-ul d-flex align-items-center'>
                    <div className='task-icons d-flex'>
                        <img src={items.image1} alt="check icons" className='img-fluid'/>
                        <img src={items.image2} alt="check icons" className='img-fluid'/>
                        <img src={items.image3} alt="check icons" className='img-fluid'/>
                    </div>
                    <div className='task-info'>
                        <h3>{items.title}</h3>
                        <p className='date-time'>{items.date}, {items.time}</p>
                    </div>
                </div>
                </>
              )
            })
        }        
    </div>
  )
}

export default TaskList