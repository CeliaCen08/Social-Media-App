import React from 'react'
import SuggestionsCard from './SuggestionsCard'

const HomeRight = () => {
  return (
    <div className=''>
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-12 h-12 rounded-full' src="https://img.freepik.com/free-photo/close-up-beautiful-flower_23-2151589663.jpg" alt="" />
                    </div>
                    <div className='ml-3'>
                        <p>Sakura</p>
                        <p className='opacity-70'>CherryBom</p>
                    </div>
                </div>
                <div>
                    <p className='text-blue-600 font-semibold'>Switch</p>
                </div>
            </div> 
            <div className='space-y-5 mt-10'>
                    {[1,1,1,1,1].map((item)=><SuggestionsCard/>)}
                </div>
        </div>
    </div>
  )
}

export default HomeRight
