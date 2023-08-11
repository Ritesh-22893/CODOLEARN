import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { MdPlayCircle} from 'react-icons/md';
//colorpiker websited
export default function Aftercoursestypes() {
  return (
    <>
  <div className='bg-[#f0f5f3] h-[500px] mt-14'> {/*After subjects for background color of light blue*/}
      <div className='ml-16'> {/*for managing text margin inside light blue background */}
        <div className='text-[20px] font-sans font-bold pt-16'>How learners like you are achieving their goals</div>
  <div className='flex gap-16'>
        <div className=' border border-black border-opacity-30 h-[300px] w-[350px] bg-white mt-8 flex flex-row' > {/*for making box */}
        <div className=' p-5 gap-8'> 
        <BiSolidQuoteAltLeft/> 

    <div className='mt-2 text-[15px]'>{/*div for text bold and normal */}
        
        I am proud to say that after a few months of taking this course...
        <div className='inline font-bold'>
        I passed my exam and am now an AWS Certified Cloud Practitioner!. 
        </div>
        This content was exactly what the CCP exam covered.

  </div>
    <div className='flex'>
        <div className='mt-4 border border-black h-7 w-7 bg-black rounded-full text-white font-bold text-center'>RP</div>
        <div className='mt-4 ml-3 text-md font-medium'>Ritesh Pokhrel</div> 
    </div>
          <div className='mt-5 border  border-black-400 border-opacity-30]'>
          </div>
{/* after border text */}
<div className='flex gap-3'>
  {/* <div className='border border-black h-7 w-7 bg-black rounded-full'></div> */}
  <MdPlayCircle className='h-10 w-10 mt-5 text-violet-700'/>
          <div className='mt-5 text-[13px] font-bold text-violet-700'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</div>
        </div>{/* div to align contents inside box */}   
        </div>
        </div> {/*closing of for making box */}
    
{/* next one */}

<div className=' border border-black border-opacity-30 h-[300px] w-[350px] bg-white mt-8' > {/*for making box */}
        <div className=' p-5 '> 
        <BiSolidQuoteAltLeft/> 

    <div className='mt-2 text-[15px]'>{/*div for text bold and normal */}
        
        I highly
        <div className='inline font-bold'>
        recommend this course for all budding data scientists.
        </div>
        <br/>Even people with no prior knowledge of any visualization tools can become a master after completing this course.


  </div>
    <div className='flex'>
        <div className='mt-5 border border-black h-7 w-7 bg-black rounded-full text-white font-bold text-center'>RP</div>
        <div className='mt-5 ml-3 text-md font-medium'>Ritesh Pokhrel</div> 
    </div>
          <div className='mt-5 border  border-black-400 border-opacity-30]'>
          </div>
{/* after border text */}
<div className='flex gap-3'>
  {/* <div className='border border-black h-7 w-7 bg-black rounded-full'></div> */}
  <MdPlayCircle className='h-10 w-10 mt-5 text-violet-700'/>
          <div className='mt-5 text-[13px] font-bold text-violet-700'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</div>
        </div>{/* div to align contents inside box */}   
        </div>
        </div>

{/* third one */}
        
<div className=' border border-black border-opacity-30 h-[300px] w-[350px] bg-white mt-8' > {/*for making box */}
        <div className=' p-5 '> 
        <BiSolidQuoteAltLeft/> 

    <div className='mt-2 text-[15px]'>{/*div for text bold and normal */}
        
    One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. 
        <div className='inline font-bold'>
        Would help anyone become a better manager.
        </div>
        {/* <br/>I am so glad i choose this, Thanks guys :) */}

  </div>
    <div className='flex'>
        <div className='mt-5 border border-black h-7 w-7 bg-black rounded-full text-white font-bold text-center'>RP</div>
        <div className='mt-5 ml-3 text-md font-medium'>Ritesh Pokhrel</div> 
    </div>
          <div className='mt-5 border  border-black-400 border-opacity-30]'>
          </div>
{/* after border text */}
<div className='flex gap-3'>
  {/* <div className='border border-black h-7 w-7 bg-black rounded-full'></div> */}
  <MdPlayCircle className='h-10 w-10 mt-5 text-violet-700'/>
          <div className='mt-5 text-[13px] font-bold text-violet-700'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2023</div>
        </div>{/* div to align contents inside box */}   
        </div>
        </div>
        </div> {/*for arranging boxes flex */}


        </div>
        </div>

  {/* main wrapping div from A broad  selection of courses to end */}    
    
    
    
    </>
      

  );
}
