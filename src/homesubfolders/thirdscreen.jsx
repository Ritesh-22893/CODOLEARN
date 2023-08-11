import React from 'react'

function Thirdscreen() {
  return (
    <div className='mt-28 ml-12 flex'>
        <div className='border-black shadow-lg shadow-black rounded-md bg-gray-700 h-[90px] w-60'>
        <div className='mt-3 ml-6 text-yellow-300 text-sm'>Featured Course</div>
        <div className='mt-1 ml-6 text-white text-sm'>Become a Front End Developer <br/> with React</div>
        </div>
        <img className='h-[500px] w-96 -ml-32 -mt-14' src="./bg image/bg-img-of-man-removebg-preview.png" alt="" />
        
<div className=' ml-20'>
    <div className=' raleway font-bold tracking-wider text-3xl'>
        Benifits Of <br/>
        Enrolling in
        <span className='text-yellow-400 tracking-normal'> CODOLEARN</span>
    </div>
    <div className='mt-4  font-thin text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Libero ducimus debitis rem sunt facilis dolorem natus mollitia <br/> obcaecati voluptatibus pariatur error dolore ratione porro.
     </div>

     <button className='border h-12 w-28 rounded-md mt-6 text-center bg-orange-500 text-white'>Register</button>
    <div className='flex gap-20'>
      <div>
     <div className='mt-6 text-3xl'>30+</div>
     <div className='text-lg text-gray-500'>Project<br/> Finshed</div>
      </div>

      <div>
      <div className='mt-6 text-3xl'>100%</div>
     <div className=' ml-2 text-lg text-gray-500'>Client <br/>Satisfaction</div>
     </div>
     
     <div>
      <div className='mt-6 text-3xl'>1000+</div>
     <div className=' ml-2 text-lg text-gray-500'>Total<br/> Students</div>
      </div>

      </div>
</div>

      
    </div>
  )
}

export default Thirdscreen
