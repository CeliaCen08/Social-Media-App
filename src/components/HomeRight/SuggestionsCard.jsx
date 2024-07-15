import React from 'react'

const SuggestionsCard = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full' src="https://m.media-amazon.com/images/I/51WHgHxF5YL._AC_UF1000,1000_QL80_.jpg" alt="" />
        <div className='ml-2'>
            <p className='text-sm font-semibold'>username</p>
            <p className='text-sm font-semibold opacity-70'>Follows you</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionsCard
