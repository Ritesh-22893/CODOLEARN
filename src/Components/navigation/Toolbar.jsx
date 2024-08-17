// import React from 'react'
// import {NavData} from './NavData';
// import {FaList} from 'react-icons/fa'
// function Toolbar(){
//     return (
//         <div className=" w-screen flex justify-between bg-cyan-500 
//             sm:bg-violet-500
//             md:bg-blue-500
//             lg:bg-purple-900
//             ">
//             <div className=' text-3xl drop-shadow-md capitalize py-6 px-6 text-white'>Menu </div>
//             <div className=' text-2xl hidden md:flex gap-10 py-6 px-6 text-white'>
            //   {
            //    NavData.map((val,i)=>{
            //     return <div key={i}> {val.title}</div>
            //    })
            // }
//             </div>
//             <div onClick={()=>{
//                 setSidebarShow()
//             }} className = md:hidden flex'>

//             </div>
// {/* <div className='flex md:hidden text-2xl px-8 py-8'>
//     <FaList/>
// </div> */}
//             </div>
//     )
//         }
//  export default Toolbar;


import React from 'react';
import { NavData } from './NavData';
import {BiFoodMenu } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

function Toolbar({ setSidebarShow }) {
  const location=useLocation();
  return (
    <div className="w-screen h-[55px] flex justify-between bg-blue-950 fixed  top-0 z-50">
      <div className="text-xl drop-shadow-md capitalize py-3 px-6 text-white ">Menu </div>
      <div className="text-md hidden md:flex gap-10 py-3 px-3 text-white mx-auto ">
        {NavData.map((val, i) => {
          return <div key={i} className={`${val.path === location.pathname ? 'border-b-2 border-white border-spacing-6' : 'bg-transparent' }`}> 
         
          <Link to={val.path}>
          {val.title}
          </Link> 
          
          </div>;
        })}
      </div>
      <div onClick={() => {
        setSidebarShow();
      }} className="" >
        {/* You can add the FaList icon here if needed */}
        <BiFoodMenu className='text-2xl text-white my-3 mx-6 cursor-pointer md:hidden'/>
      </div>
    </div>
  );
}

export default Toolbar;
























