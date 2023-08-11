import React from 'react'

function Webdev(){
    return(
        <div className='border rounded-md border-black solid h-[500px] w-[1150px] mt-4'>

     <div className='text-xl font-bold font-sans pl-7 pt-7'>Build websites and applications with Web Development</div>

     <div className='pt-2 pl-7'>The world of web development is as wide as the internet itself. Much of our social and vocational <br/>lives play out on the internet, which prompts new industries aimed at creating, managing, and <br/> debugging the websites and applications that we increasingly rely on.  </div>
       
     <input className=' border border-black rounded-sm bg-white font-bold text-sm cursor-pointer hover:bg-yellow-200 h-10 w-44 ml-7 mt-4' type="button" value={'Explore Web Development'} />  
     {/* div created for aliging all five html and css courses*/}
     <div className='grid grid-cols-5 mr-7'>

    {/* main div for all contents below 1st column of explore html and css*/}
     <div className=' grid flex-col ml-7 gap-1 '>
       
       <img className='h-32 w-60 border rounded-sm mt-6 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPnupQZGMwcT0sRACfHDr_aJsHg7X93XNyQ&usqp=CAU " alt="" />
       
       <div className='font-bold text-[15px] '>The complete JavaScript course 2023</div>
<div className='text-[13px] opacity-50'>Ritesh Pokhrel</div>
<div className='font-serif font-bold '>$22.99</div>
<div className=' text-[12px] w-24 h-6 rounded-sm  bg-green-400 text-white  text-center'>Most viewed</div>
</div>  {/* closing  div for all contents below 1st column of explore html and css */}

     

 
{/* main div for all contents below 2nd column of explore html and css*/}
<div className=' grid flex-col ml-7 '>
       
       <img className='h-32 w-60 border rounded-sm mt-6 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSjtynhlJLcf-snjNi9wi5tmQ_ZNZBnqObQ&usqp=CAU" alt="" />
       
       <div className='font-bold text-[15px] '>Make website functioning with this 10 days course </div>
<div className='text-[13px] opacity-50'>Ritesh Pokhrel</div>
<div className='font-serif font-bold '>$14.99</div>
<div className=' text-[12px] w-24 h-6 rounded-sm  bg-green-400 text-white  text-center'>Most viewed</div>
</div>  {/* closing  div for all contents below 2nd column of explore html and css */}


   
 
   {/* main div for all contents below 3rd column of explore html and css*/}
<div className=' grid flex-col ml-7 gap-1 '>
       
       <img className='h-32 w-60 border rounded-sm mt-6 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VGWaud5O0RsXPSTBPnoWyWFKGT1J4Tf03Q&usqp=CAU" alt="" />
       
       <div className='font-bold text-[15px] '>The complete Full-Stack JavaScript course</div>
<div className='text-[13px] opacity-50'>Ritesh Pokhrel</div>
<div className='font-serif font-bold '>$19.99</div>

</div>  {/* closing  div for all contents below 3rd column of explore html and css */}
 


  {/* main div for all contents below 4th column of explore html and css*/}
  <div className=' grid flex-col ml-7 gap-1 '>
       
       <img className='h-32 w-60 border rounded-sm mt-6 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9mdp-Y_D3DJ5Juk9RTX78Ph_Ose4xmvMUg&usqp=CAU" alt="" />
       
       <div className='font-bold text-[15px] '>JavaScript course to help your kid build websites </div>
<div className='text-[13px] opacity-50'>Ritesh Pokhrel</div>
<div className='font-serif font-bold '>$19.99</div>
<div className=' text-[12px] w-24 h-6 rounded-sm  bg-green-400 text-white  text-center'>Most viewed</div>
</div>  {/* closing  div for all contents below 4th column of explore html and css */}
  

{/* main div for all contents below 5th column of explore html and css*/}
<div className=' grid flex-col ml-7 gap-1 '>
       
<img className='h-32 w-60 border rounded-sm mt-6 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKeJRcMOc0nL30xzY058icsrGwzE1hu0yvBg&usqp=CAU" alt="" />

<div className='font-bold text-[15px] '>Ultimate guide for learning JavaScript</div>
<div className='text-[13px] opacity-50'>Ritesh Pokhrel</div>
<div className='font-serif font-bold '>$24.99</div>


</div>  {/* closing  div for all contents below 5th column of explore html and css */}
  
  {/* closing div of aliging 5 html and css box contents*/}
  </div>
   
    {/*  closing div of border for all courses in htmlcss.jsx*/}
    </div> 
    );
}
export default Webdev;