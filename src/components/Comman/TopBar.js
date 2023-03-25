import React from 'react'
import { Link } from 'react-router-dom'
import { TabData } from '../../services/data'

const TopBar = () => {
  return (
    <div className='tabbing-content'>
        <div className='d-flex'>
            <div className='text-start'>
                <h4 className='left-headinngs'>Work</h4>
            </div>
            <div className='text-end ms-auto'>
               <ul className='d-flex'>
                {
                    TabData.map((items)=>{
                        return(
                            <>
                                <li>
                                    <Link to="/">{items.title}</Link>
                                </li>
                            </>
                        )

                    })
                }
               </ul>
            </div>
        </div>
    </div>
  )
}

export default TopBar