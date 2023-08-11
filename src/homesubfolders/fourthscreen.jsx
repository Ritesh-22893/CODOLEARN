import React from 'react'

import {RiComputerFill} from 'react-icons/ri'  //for computor icon
import {GiTeacher} from 'react-icons/gi' //for instructor icon 
import {MdOutlineMenuBook} from 'react-icons/md'  //for book icon
import {BiSolidOffer} from 'react-icons/bi'  //for job offer (prize)
import {IoLibrarySharp} from 'react-icons/io5'  //for library icon
import {FaHandsHelping} from 'react-icons/fa' //for support icon


function Fourthscreen() {
  return (
<div className='mt-16'>
       <div className='raleway text-center text-3xl font-black tracking-wide'>
       Why to choose <span className='text-yellow-600 '>CODOLEARN</span> ?
       </div>
    <div className='ml-6 mt-12 grid grid-cols-3 '>
        <div className='flex flex-col gap-3' >
            <div className='flex justify-center text-4xl'><RiComputerFill/></div>
            <div className=' text-center raleway text-xl font-black text-blue-700 tracking-wide '>Well Equiped Lab</div>
            <div className='text-gray-800 px-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus adipisci et a rerum dolorem, incidunt unde volutrum quod!</div>
        </div>
  
        <div className='flex flex-col gap-3' >
            <div className='flex justify-center text-4xl '><GiTeacher/></div>
            <div className=' text-center raleway text-xl font-black text-orange-700 tracking-wide '>Experienced Instructor</div>
            <div className='text-gray-800 px-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus adipisci et a rerum dolorem, incidunt unde volutrum quod!</div>
        </div>

        <div className='flex flex-col gap-3' >
            <div className='flex justify-center text-4xl '><MdOutlineMenuBook/></div>
            <div className=' text-center raleway text-xl font-black text-green-500 tracking-wide'>Updated Syallabus </div>
            <div className='text-gray-800 px-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus adipisci et a rerum dolorem, incidunt unde volutrum quod!</div>
        </div>

        <div className='mt-8 flex flex-col gap-3' >
            <div className='flex justify-center text-4xl '><BiSolidOffer/></div>
            <div className=' text-center raleway text-xl font-black text-pink-500 tracking-wide'>Job Offer</div>
            <div className='text-gray-800 px-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus adipisci et a rerum dolorem, incidunt unde volutrum quod!</div>
        </div>

        <div className='mt-8 flex flex-col gap-3' >
            <div className='flex justify-center text-4xl '><IoLibrarySharp/></div>
            <div className=' text-center raleway text-xl font-black text-violet-500 tracking-wide'>Access Library</div>
            <div className='text-gray-800 px-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus adipisci et a rerum dolorem, incidunt unde volutrum quos!</div>
        </div>

        <div className='mt-8 flex flex-col gap-3' >
            <div className='flex justify-center text-4xl '><FaHandsHelping/></div>
            <div className=' text-center raleway text-xl font-black text-yellow-800 tracking-wide'>Supportive</div>
            <div className='text-gray-800 px-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus adipisci et a rerum dolorem, incidunt unde volutrum quod!</div>
        </div>
        

        
    </div>


</div>

  )
}

export default Fourthscreen
