import React from 'react'
import { Nav } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import { MenuData } from '../../services/data'

const Header = () => {
  return (
    <div className='top-header'>
        <Nav>
            <ul className='d-flex navbar-ul'>
                {
                    MenuData.map((items)=>{
                        return(
                            <>
                                <li>
                                    <Link to='/'>{items.title}</Link>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </Nav>
    </div>
  )
}

export default Header