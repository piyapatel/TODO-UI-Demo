import React from 'react'
import { Images } from '../../pages/Images'

const FriendsCatrgory = () => {
  return (
     
    <div className='category-panel p-4 border-bottom-0'>
        <h2 className='headings text-center'>Friends</h2>
        <div className='no-data text-center mt-4'>
            <img src={Images.NODATA} alt="no data found"/>
        </div>
    </div>
  )
}

export default FriendsCatrgory