import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img className='w-10 h-10 rounded-full' src="https://i.kym-cdn.com/photos/images/newsfeed/001/741/229/1d0.jpg" alt="" />
      <div className='ml-3'>
        <p>Full name</p>
        <p className='opacity-70'>username</p>
      </div>
      </div>
    </div>
  )
}

export default SearchUserCard
