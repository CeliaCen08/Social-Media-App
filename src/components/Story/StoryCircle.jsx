import React from 'react'
import {useNavigate} from 'react-router-dom'

const StoryCircle = () => {
    const navigate = useNavigate()

    const handleNavigate=()=> {
        navigate("/story")
    }

  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='w-16 h-16 rounded-full' src="https://media.tenor.com/z73m7Nr0LBQAAAAM/cat.gif" alt="" />
        <p>username</p>
    </div>
  )
}

export default StoryCircle
