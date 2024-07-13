import React, {useState} from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { mainu } from './SidebarConfig'

const Sidebar = () => {
    const [activeTab, setActiveTab]=useState();
    const navigate=useNavigate()

    const handleTabClick=(title)=> {
        setActiveTab(title)
        if(title === "Profile") {
            navigate("/username")
        }
        else if (title === "Home") {
            navigate("/")
        }
    }

  return (
    <div className='sticky top-0 h-[100vh]'>
        <div className='flex felx-col justify-between h-full px-10'>
            <div >
                <div className='pt-10'>
                    <img className='w-40' src="http://i.imgur.com/zqpwkLQ.png" alt="logo"/>
                </div>
                <div className='mt-10'>
                {mainu.map((item)=> (
                    <div onClick={()=>handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                        {activeTab === item.title? item.activeIcon: item.icon} 
                        <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>{item.title}</p> 
                    </div>
                ))}
            </div>
                <div className='flex items-center cursor-pointer pb-10'>
                <IoReorderThreeOutline className='text-2xl'/>
                <p className='ml-5'>More</p>
                </div>        
            </div>
        </div> 
    </div>
  )
}

export default Sidebar;
