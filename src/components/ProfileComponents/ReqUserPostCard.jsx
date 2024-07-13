import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import "./ReqUserPostCard.css"

const ReqUserPostCard = () => {
  return (
    <div className='p-2'>
        <div className='post w-60 h-60'> 
            <img className='cursor-pointer' src="https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/oYwj8xAcIDKGP0AByLl1fnyCHQxFJGAbQDf8At~tplv-tej9nj120t-origin.webp" alt="" />
        
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>10</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>37</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard