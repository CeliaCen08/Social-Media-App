import React from 'react'
import { TbCircleDashed} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full ">
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' 
                src="https://img.freepik.com/free-photo/close-up-beautiful-flower_23-2151589663.jpg" 
                alt="" />
            </div>
        <div className='space-y-5' >   
            <div className='flex space-x-10 items-center '>
                <p>CherryBom</p>
                <button>Edit Profile</button>
                <TbCircleDashed></TbCircleDashed>
            </div>
            
            <div className='flex space-x-10 items-center '>
                <div>
                    <span className='font-semibold mr-2'>10</span>
                    <span>posts</span>
                </div>
                <div>
                    <span className='font-semibold mr-2'>5</span>
                    <span>followers</span>
                </div>
                <div>
                    <span className='font-semibold mr-2'>10</span>
                    <span>following</span>
                </div>
                
            </div>
            <div>
                <p className='font-semibold'>Sakura</p>
                <p className='font-ti=hin text-sm'> 🌸 I love strawberries and Coffee! 🌸</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserDetails
