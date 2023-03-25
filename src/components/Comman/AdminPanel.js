import React from 'react'
import { Images } from '../../pages/Images'

const AdminPanel = () => {
  return (   
        <div className='admin-panel'>
            <div className='admin-images text-center'>
              <img src={Images.USERIMAGE} alt="user images"/>
            </div>
            <div className='user-name text-center my-4'>
                <h5>admin</h5>
                <p>g.alex00@bk.ru</p>
            </div>
            <div className='list-ul'>
                <ul className='list-item d-flex'>
                    <li>
                        <h5>4</h5>
                        <p>
                            <span>TO Do</span>
                            <span>Tasks</span>
                        </p>
                    </li>
                    <li>
                        <h5>1</h5>
                        <p>
                            <span>Completed</span>
                            <span>Tasks</span>
                        </p>
                    </li>
                    <li>
                        <h5>0</h5>
                        <p>
                            <span>Primary</span>
                            <span>Tasks</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>      
  )
}

export default AdminPanel