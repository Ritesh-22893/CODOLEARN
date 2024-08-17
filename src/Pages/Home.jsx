// // yo ipaddress ko lagi ho axios wala 
// import React, { useEffect, useState } from 'react'
// import axios from "../hoc/axios"

// export default function Home(){




// const getData=()=>{
//             try {
//                 axios.get('/province/list').then(res=>{
//                     console.log(res)
//                     setFirst([...res.data.data.data])
//                 }).catch(err=>{
//                     console.log(err)
    
//                 })
//             } catch(error){
//                 console.log(error);
//             }
//         }
//         useEffect(() => {
//           getData()
//         }, []);
//     const [first , setFirst] = useState([]);
//         return(
//         <>
//     <div className="grid grid-cols-3 gap-10">
    
            
//                 {
//                     first.map((val,i)=>{
//                         return(
//      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <a href="#">
//     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val.name}</h5>
//     </a>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{val.alt_name} </p>
    
//     </div>
//                         );
//                     })
//                 }
          
        
//     </div>
//     </>
//     );
//             }

// upward all for api i.e making axios


// home page starts from here 

import React, { useEffect, useState } from 'react'
import { imag } from '../Components/navigation/for homepage/bg-img-array'

import Secondscreen from '../homesubfolders/secondscreen'
import Thirdscreen from '../homesubfolders/thirdscreen'
import Fourthscreen from '../homesubfolders/fourthscreen'

export default function Home() {
    const [bgimg,setbgimg]=useState(0)
  
// for looping 3 background images
    const change=()=>{
        if(bgimg === imag.length-1){
            setbgimg(0)
        }
        else{
            setbgimg(bgimg+1)
        }
    }
useEffect(()=>{
   let interval=setTimeout(()=>{
        change();
    },4000)
    return()=>{
        clearTimeout(interval)
    }
})
  return (
    <>
    <div>
  
 <div className='flex gap-8 py-12'>  {/*created to  arrange the two boxes and bg-mapped-images in flex */}

    <div className='flex flex-col'>
 <div className='mt-7 ml-12 border border-blue-950 rounded-xl bg-00 h-[260px] w-[470px] p-4 bg-blue-950'>
     <div className=' tracking-wide text-[24px] bg-gray700 text-green-200 '>
     <span className='text-yellow-300 font-extraboldr' >CODOLEARN</span> Platform <br/>for Enthusiast and Geeeks  !!!
     </div>
     <div className='text-white italic mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci iure dolorum commodi quam consequuntur soluta magnam consectetur tempora? Exercitationem, doloribus. </div>
   <button className='mt-4 border rounded-[24px] text-lg font-extrabold text-gray-600 bg-white hover:bg-green-600 hover:text-gray-300 hover:scale-105 transition-all ease-in-out h-12 w-32' >Register</button>
</div>

<div className='mt-5 ml-12 border border-blue-950 rounded-xl bg-00 h-60 w-[470px] p-4 bg-blue-950'>
     <div className=' text-[24px] text-green-200 '>
     Powerful Statement About Your Brand Goes Here 
         </div>
     <div className='text-white italic mt-3'>Lorem ipsum dolor sidipisci iure dolorum cosoluta magnam consectetur tempora? Exercitationem, doloribus. </div>
   <button className='mt-4 border rounded-[15px] text-lg font-extrabold text-gray-600 bg-white hover:bg-green-600 hover:text-gray-300 hover:scale-105 transition-all ease-in-out h-12 w-32' >Learn More</button>
</div>
</div>
{/* arranging two boxes ended */}

 <div> {/*for mapping out the backgroung changing images */} 
        {
            imag.map((value,i)=>{
               
                if(bgimg===i){
                return(
                <div className=' mt-7' key={i}>
                <img className='h-[520px] w-[760px] rounded-lg ' src={value.image} alt=""/>
                </div>
                );}
            })
        }
 </div> {/* mapping ended */}
    
    </div>
    <img src="https://static.vecteezy.com/system/resources/previews/000/575/952/non_2x/gray-and-white-color-geometric-modern-background-design-vector-illustration.jpg" alt="" className=' h-[680px] absolute top-0 left-0 z-[-1] w-screen' />
</div>   {/*closing div for aligning two boxes and bg-images */}
    
<div className='mt-28'>
    <Secondscreen/>
</div>

<div>
    <Thirdscreen/>
</div>

<div>
    <Fourthscreen/>
</div>
     </>
    
  )
}
