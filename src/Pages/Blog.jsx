import React from 'react'
import Fourthscreen from '../coursessubfolders/blogsubfolder/Fourthscreen';

function Blog(){
    return(
<div>  {/*main div */}

 <div>  {/*for first screen contents */}   
        
        <img className='w-screen h-[620px] ' src="https://img.freepik.com/free-photo/flat-lay-arrangement-desk-elements-with-copy-space_23-2148513316.jpg?w=826&t=st=1691673775~exp=1691674375~hmac=787feaa969c675c467db7a4533e165f3c5d444a3827798729e4b1115bb3287ed" alt="" />
        
    <div id='first line of text' className='text-[32px] font-extralight absolute top-28 left-16 gap-4 flex tracking-wider'>
    Haven't Started Your 
    <div className='text-green-600 font-extrabold'>Front-End</div>
    Journey?
    </div>
        
        <div id='second 3 lines of text' className='absolute top-48 left-16 raleway text-[27px] tracking-wide flex flex-col gap-1 '>
        Dont't Worry ,
        <div>
        Let Me 
        <span className='text-green-600 font-sans font-bold'> Instruct </span>
        You With
        </div>
        The Fundamentals of Front-End Development
        </div> 
       
     <div id='for buttons' className='absolute top-[400px] left-16 flex gap-6'>
            <button className='text-[20px] tracking-wide h-16 w-40 rounded-full text-white bg-black hover:scale-110'>Get Started</button>
        
            <button className='text-[20px] tracking-wide h-16 w-40 rounded-full text-black bg-white hover:scale-110 ease-in-out'>Take a Tour</button>
        </div>


     </div> {/*ending div of first screen contents */}
 
 
 <div>  {/*for second screen*/}
        <div className='mt-16 text-[35px] tracking-wider flex justify-center gap-2'>
        My <span className='text-yellow-400 underline'> Blog</span>
        </div>
    
   <div className=' mt-10 ml-24 flex gap-2'>
      <div id='1st box'> {/*wrappping div */}
        <div className=' ml-6 border border-solid rounded-xl h-[620px] w-[590px] flex flex-col  shadow-md shadow-slate-300 hover:scale-105 transition-all ease-in-out cursor-pointer' >
             <img className='mt-5 ml-6 w-[540px] h-[360px] rounded-xl shadow-md shadow-slate-600' src="https://pratice122.netlify.app/images/boximg1.webp" alt="" />
       
       <div className=' ml-7 mt-10 text-[23px]'>Design your webpage with <span className='text-green-600 font-bold'>Creative Ideas...</span></div>
       
       <div className='ml-7 mt-10 flex gap-48'>
       <div className=' raleway '>By Ritesh Pokhrel</div>
       <div>August 2, 2023</div>
       </div>
       

        </div> {/*border closing div */}
      
      </div> {/*closing of wrapping div */}
     
     <div  className='flex flex-col gap-8'>
      <div id='2nd box'> {/*wrappping div */}
        <div className=' ml-6 border border-solid rounded-xl h-[295px] w-[535px] flex flex-col shadow-md shadow-slate-300 hover:scale-105 transition-all ease-in-out cursor-pointer' >
             <img className='mt-5 ml-5 w-[495px] h-[210px] rounded-xl shadow-md shadow-slate-600' src="https://usaartnews.com/wp-content/uploads/colors.png" alt="" />
       
       <div className=' ml-5 mt-4 text-[21px]'>Creating various beautiful pattern using...</div>
       
        </div> {/*border closing div */}
      
      </div>  {/*closing of wrapping div */}

      <div id='2nd box'> {/*wrappping div */}
        <div className=' ml-6 border border-solid rounded-xl h-[295px] w-[535px] flex flex-col shadow-md shadow-slate-300 hover:scale-105 transition-all ease-in-out cursor-pointer' >
             <img className='mt-5 ml-5 w-[495px] h-[210px] rounded-xl shadow-md shadow-slate-600' src="https://e0.pxfuel.com/wallpapers/260/917/desktop-wallpaper-material-design-abstrac-liquid-patterns-abstract-waves-colorful-backgrounds-geometric-art-creative-artwork-abstract-art-colorful-waves.jpg" alt="" />
       
       <div className=' ml-5 mt-4 text-[21px]'>Making website look georgeous through...</div>
       
        </div> {/*border closing div */}
      
      </div>  {/*closing of wrapping div */}


    </div>{/*for arranging two rows */}

   </div> {/*for arranging two cols */}

 
 </div> {/*ending div of second screen */}
 
<div className='mt-12 text-center bg-gray-100 h-72 w-screen flex flex-col gap-3'>  {/*for third screen*/}
    {/* <div className='mt-16'> */}
  <div className='pt-16 text-[34px] font-sans font-extrabold'> All Blog Post</div>
  <div className='raleway text-[23px]'> With over 1000 courses in our website</div>
  <div className='flex justify-center'>
    <input type="text" placeholder=' Search Blog' className='p-5 border border-solid border-black h-16 w-[400px] rounded-full'/>
    <button className='text-white bg-black rounded-full tracking-wider h-16 w-44'>Search</button>
  </div>
    {/* </div> */}
</div>{/*closing of third screen */}


<div className='mt-20 '> {/*for fourth screen */}
<Fourthscreen/>
</div>

</div> 
    );
}
export default Blog;