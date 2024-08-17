// // import React, { useState } from 'react'

// import React from 'react'

// // function Sidebar({siderbarshow,setSiderbarshow}){
//   function Sidebar({title, SidebarShow,setSidebarShow,children}){
// return(

//       // <div className={`h-screen w-screen fixed top-0 float-right 
//       //  ${siderbarshow?"-translate-x-0":"translate-x-full"}
//       //  right-0 bg-yellow-500`}>
//     <div className={`h-screen w-screen fixed grid grid-cols-2 
//       top-0 left-0 float-right transition-all duration-700 
//       delay-200 ease-in-out
//       ${SiderbarShow?"translate-x-0":"translate-x-full"} 
//       right-0 bg-black bg-opacity-10`}>

//       <div onClick={() => {
//         setSidebarShow()
//       }} className='w-full'></div>
//       <div className='w-full h-full bg-red-500'>
//       {title}
//       {children}
//      </div>
//     </div>
  
//       )
//     }
    

// export default Sidebar;

import React from 'react';
import { NavData } from './NavData';
import { Link } from 'react-router-dom';

function Sidebar({ title, SidebarShow, setSidebarShow, children }) {
  return (
    <div
      className={`h-screen w-screen fixed grid grid-cols-2 left-0 float-right transition-all duration-700 delay-200 ease-in-out 
      ${ SidebarShow ? 'translate-x-0' : 'translate-x-full'
      } right-0 bg-black-500 bg-opacity-5`}
    >
      <div
        onClick={() => {
          setSidebarShow(!SidebarShow); // Toggle the SidebarShow state
        }}
        className="w-full">  
        </div>
      {/* <div className="flex flex-col px-44 font-bold text-white text-xl py-8  gap-10  w-50% bg-gradient-to-l from-blue-500 via-purple-700 to-blue-800"> */}
      <div className=" flex flex-col px-24 font-bold text-white text-xl py-8  gap-6  w-40% bg-blue-900  ">
     
        {/* {title}
        {children} */}
         {NavData.map((val, i) => {
          return(
        <Link to={val.path}><div key={i}>{val.title}</div></Link> 
      );
        })}
        </div>
        </div>
      );
}
export default Sidebar;

