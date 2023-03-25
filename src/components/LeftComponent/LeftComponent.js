import React from 'react'
import AdminPanel from '../Comman/AdminPanel'
import Category from '../Comman/Category'
import FriendsCatrgory from '../Comman/FriendsCatrgory'

const LeftComponent = () => {
  return (
    <div className='admin-content'>
        <AdminPanel/>
        <Category/>
        <FriendsCatrgory/>
    </div>
  )
}

export default LeftComponent