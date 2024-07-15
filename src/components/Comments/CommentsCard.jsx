import React, {useState} from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentsCard = () => {
    const [isCommentLiked, setIsCommentLiked] = useState();

    const handleLikeComment=()=>{
        setIsCommentLiked(!isCommentLiked);
    }
  return (
      <div>
        <div className='flex items-center justify-between py-5'>
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1" alt="" />
                    </div>
                <div className='ml-3'>
                <p>
                    <span className='font-semibold'>Mr. Dino</span>
                    <span className='ml-3'>cute!!!</span>
                </p>
                <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                    <span>1 min ago</span>
                    <span>25 Likes</span>
                </div>
            </div>
            
            </div>

            {isCommentLiked ? <AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/> : 
            <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer'/> }
        </div>
      </div>
    
  )
}

export default CommentsCard
