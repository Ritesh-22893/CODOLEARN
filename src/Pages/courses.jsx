import React, { useState } from 'react'
import Htmlandcss from '../coursessubfolders/htmlcss';
import Javasc from '../coursessubfolders/javascript';
import Webdev from '../coursessubfolders/webdev';
import Aftercoursestypes from '../coursessubfolders/aftercoursestypes';
import Lastofcourses from '../coursessubfolders/lastofcourses';
// import {BiSolidQuoteAltLeft} from 'react-icons/bi'
function Courses(){
    const [click, tap]=useState('html');
    return(
        // for top background
        <>
        <div className="h-[480px] w-100vw bg-green-600">
            <h1 className=' font-bold pt-20 pl-16 text-[43px]  text-white'>Pursuing Carrer <br/> In<span className='text-yellow-300 font '>  Frontend Developing </span>?
            </h1>
            <h2 className='text-2xl pt-8 pl-16 text-white font-bold '>Then, <span className='text-yellow-300 '> You are at the perfect place to begin With !!</span></h2>

            <h2 className='text-xl pt-6 pl-16 text-white '>Enroll in courses by clicking the button below</h2>

            {/* for buttons to aply now */}
  
            <input className='text-xl font-bold text-white border-2 rounded-xl bg-pink-600 text-center ml-16 mt-6 h-14 w-36 hover:bg-violet-800 cursor-pointer' type="button" value='Apply Now'/>

            <input className='text-xl font-bold text-white border-2 rounded-xl bg-blue-600 text-center ml-24 mt-6 h-14 w-36 relative right-[50px] hover:bg-violet-800 cursor-pointer' type="button" value='Take Trail'/>
                
            <img className=' absolute left-[730px] top-20 h-[400px] w-[500px] rounded-2xl' src="./bg image/bg-img.png" alt="" />
        </div>

        {/* for general info lines  {mailny to margin all botton items}*/}

        <div className='ml-16 mt-16 grid gap-2'>
          <h1 className='text-4xl font-serif font-bold '>A broad selection of courses</h1>
          <h2 className='text-lg'>Choose from over 210,000 online video courses with new additions published every month</h2>
         {/* div for sub to choose from*/}
          <div className='flex gap-10 mt-5 font-bold text-slate-500 cursor-pointer'>
          
          <div className={`hover:text-black ${click==='html'?"text-black" :""} visited:text-black`} onClick={()=>{
            tap('html');
          }} >Html and CSS</div>

           <div className='hover:text-black' onClick={()=>{
            tap('javascript')
           }}>JavaScript</div>

          <div className='hover:text-black' onClick={()=>{
            tap('webdev')
           }} >Web Deveplopment</div>
           
          <div className='hover:text-black'>Excel</div>

          <div className='hover:text-black'>Python</div>
        </div>
        <div>
        {
        click==='html'?<Htmlandcss/>:
        click==='javascript'?<Javasc/>:
        click==='webdev'?<Webdev/>:
        <div></div>
    }
        </div>  {/*end of subject choosing div */}
         </div> {/* closing div for managing margin upto courses ending */}

<div>
  <Aftercoursestypes/>
</div>

<div>
  <Lastofcourses/>
</div>
    
    
    </>
    );
} 
export default Courses;