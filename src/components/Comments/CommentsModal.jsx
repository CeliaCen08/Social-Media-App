import React from 'react'
import {Modal, ModalOverlay, ModalContent, ModalBody} from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import { BsBookmark, BsBookmarkFill, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import CommentsCard from './CommentsCard'
import "./CommentsModal.css"

const CommentsModal = ({onClose, isOpen, isSaved, iPostLiked, handlePostLiked, handleSavePost}) => {
  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>

          <ModalBody>
            <div className='flex h-[75vh] relative'>
                <div className='w-[45%] flex flex-col justify-center'>
                    <img className='max-h-full w-full' src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg" alt="" />
                </div>
                <div className=' w-[55%] pl-10 relative'>
                    <div className='flex justify-between items-center py-5'>                    
                        <div className='flex items-center'>
                            <div >
                                <img className='h-9 w-9 rounded-full' src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg" alt="" />
                            </div>
                            <div className='ml-2'>
                                <p>username</p>
                            </div>
                        </div>
                        <BsThreeDots/>
                    </div>
                    <hr/>
                    <div className='comment'>
                        {[1,1,1,1].map(()=><CommentsCard/>)}
                    </div>
                    <div className='absolute bottom-0 w-[90%]'>
                        <div className='flex justify-between items-center w-full py-4' >
                        <div className='flex items-center space-x-2'>
                            {iPostLiked ? <AiFillHeart className='text-xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLiked}/> : 
                            <AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLiked}/>}
                            <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                            <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                            
                        </div>
                        <div>
                            {isSaved ? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}/> :
                            <BsBookmark className='text-xl hover:opacity-50 cursor-pointer' onClick={handleSavePost}/> }
                            
                        </div>
                        </div>
                        <div className='w-full py-2'>
                            <p>10 likes</p>
                            <p className='opacity-50 text-sm'>1 day ago</p>
                        </div>

                        <div className='flex w-full items-center'>
                            <BsEmojiSmile/>
                            <input className='commentInput' type='text' placeholder='Add a comment...'/>
                        </div>
                    </div>
            
                </div>
            </div>
            
          </ModalBody>

        </ModalContent>
        
      </Modal>
    </div>
  )
}

export default CommentsModal
