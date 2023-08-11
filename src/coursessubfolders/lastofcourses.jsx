import React from 'react'

export default function Lastofcourses() {
  return (
    <>
<div className='ml-16'>  {/*for aligning margin to left to all contents */}
           
        <div className='mt-8 text-2xl font-bold'>Top Categories</div>
    
    <div className='mt-6 grid grid-cols-4'>
        <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold '>Design</h1>
        </div>

        {/* second one */}
        <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>Development</h1>
        </div>

        {/* Third one */}
        <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>Marketing</h1>
        </div>

       {/* fourth one */}
       <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>IT and Software</h1>
        </div>

    
       {/* fifth one */}
       <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>Personal Development</h1>
        </div>

        {/* sixth one */}
       <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>Business</h1>
        </div>

        {/* seventh one */}
       <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>Photography</h1>
        </div>

        {/* eight one */}
       <div>
            <img className='hover:w-[305px] cursor-pointer' src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt=""/>
            <h1 className='text-center text-xl font-semibold'>Music</h1>
        </div>
    



    </div>  {/*end of making grid to 4 cols*/}

</div>  {/*end of making left margin div*/}
    </>
  )
}
