import React from 'react'

function Fourthscreen() {
  return (
    <div> {/*main div of 4th screen */}
      <div className='ml-20 grid grid-cols-3'> {/*arranging the 6 boxes */}
       
        <div id='1st' className='border rounded-lg h-[430px] w-[380px] hover:scale-105 transition-all ease-in-out cursor-pointer shadow-md border-gray-300'>
         <img className=' p-5 h-[250px] w-[375px] rounded-lg' src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?w=740&t=st=1691689434~exp=1691690034~hmac=a3d8e834d3d1f0964dca9bb342e0d694f3ffe23b3ef946298410df8fe9f636e8" alt="" />
       <div className=' raleway font-bold mt-2 ml-4 text-[20px] tracking-wide text-yellow-500'>Web Development</div>
       <div className='ml-4 mt-4 text-xl hover:text-green-500'>Develop demanding and eye catching websites... </div>
      
      <div className='ml-4 mt-4 flex gap-24'>
       <div className='raleway tracking-wide'>By Ritesh Pokhrel</div>
       <div className=' raleway tracking-wide'>August 2, 2023</div>
      </div>

      </div>{/*for border closing */}
       
      <div id='2nd' className='border rounded-lg h-[430px] w-[380px] hover:scale-105 transition-all ease-in-out cursor-pointer shadow-md border-gray-300'>
         <img className=' p-5 h-[250px] w-[375px] rounded-lg' src="https://i2.wp.com/www.chilliprinting.com/Online-Printing-Blog/wp-content/uploads/2019/10/AdobeStock_236279132.jpeg?w=1920&ssl=1" alt="" />
       <div className=' raleway font-bold mt-2 ml-4 text-[20px] tracking-wide text-blue-500'>Graphic Designing</div>
       <div className='ml-4 mt-4 text-xl hover:text-green-500'>Develop demanding and eye catching graphics... </div>
      
      <div className='ml-4 mt-4 flex gap-24'>
       <div className='raleway tracking-wide'>By Ritesh Pokhrel</div>
       <div className=' raleway tracking-wide'>August 2, 2023</div>
      </div>

      </div>{/*for border closing */}
      
      <div id='3rd' className='border rounded-lg h-[430px] w-[380px] hover:scale-105 transition-all ease-in-out cursor-pointer shadow-md border-gray-300'>
         <img className=' p-5 h-[250px] w-[375px] rounded-lg' src="https://pferdewetten-online.net/pictures/photoshop-cc-layers-tutorial.jpg" alt="" />
       <div className=' raleway font-bold mt-2 ml-4 text-[20px] tracking-wide text-purple-500'>PhotoShop</div>
       <div className='ml-4 mt-4 text-xl hover:text-green-500'>Develop demanding and eye catching  photos... </div>
      

      <div className='ml-4 mt-4 flex gap-24'>
       <div className='raleway tracking-wide'>By Ritesh Pokhrel</div>
       <div className=' raleway tracking-wide'>August 2, 2023</div>
      </div>

      </div>{/*for border closing */}
      </div>{/*closing of grid-cols-3 upper row */}

      <div className="ml-20 mt-10 grid grid-cols-3"> {/*for lower row */}
      <div id='4th' className='border rounded-lg h-[430px] w-[380px] hover:scale-105 transition-all ease-in-out cursor-pointer shadow-md border-gray-300'>
         <img className=' p-5 h-[250px] w-[375px] rounded-lg' src="https://wallpaperaccess.com/full/1704555.jpg" alt="" />
       <div className=' raleway font-bold mt-2 ml-4 text-[20px] tracking-wide text-pink-500'>Data Science</div>
       <div className='ml-4 mt-4 text-xl hover:text-green-500'>Learn the concepts of Data Structures and Algorithm... </div>
      
      <div className='ml-4 mt-4 flex gap-24'>
       <div className='raleway tracking-wide'>By Ritesh Pokhrel</div>
       <div className=' raleway tracking-wide'>August 2, 2023</div>
      </div>

      </div>{/*for border closing */}

      <div id='5th' className='border rounded-lg h-[430px] w-[380px] hover:scale-105 transition-all ease-in-out cursor-pointer shadow-md border-gray-300'>
         <img className=' p-5 h-[250px] w-[375px] rounded-lg' src="https://cdn-ph-web.inkedone.com/stephen-ward---the-joker-2---pencil-drawing------10102018143705.jpg" alt="" />
       <div className=' raleway font-bold mt-2 ml-4 text-[20px] tracking-wide text-green-900'>Drawing</div>
       <div className='ml-4 mt-4 text-xl hover:text-green-500'>Creativity starts to arise from here... </div>
      
      <div className='ml-4 mt-4 flex gap-24'>
       <div className='raleway tracking-wide'>By Ritesh Pokhrel</div>
       <div className=' raleway tracking-wide'>August 2, 2023</div>
      </div>

      </div>{/*for border closing */}

      <div id='6th' className='border rounded-lg h-[430px] w-[380px] hover:scale-105 transition-all ease-in-out cursor-pointer shadow-md border-gray-300'>
         <img className=' p-5 h-[250px] w-[375px] rounded-lg' src="https://images.firstpost.com/wp-content/uploads/2018/12/microsoft-office-1024.jpg" alt="" />
       <div className=' raleway font-bold mt-2 ml-4 text-[20px] tracking-wide text-blue-800'>Microsoft Office</div>
       <div className='ml-4 mt-4 text-xl hover:text-green-500'>Master various Microsoft Packages in no time... </div>
      
      <div className='ml-4 mt-4 flex gap-24'>
       <div className='raleway tracking-wide'>By Ritesh Pokhrel</div>
       <div className=' raleway tracking-wide'>August 2, 2023</div>
      </div>

      </div>{/*for border closing */}
      </div>
    </div>
  )
}

export default Fourthscreen
