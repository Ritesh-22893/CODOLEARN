import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {MdCall} from 'react-icons/md'
import {GrMail} from 'react-icons/gr'

function Footer(){
    return(
        <div className=' bg-blue-950'>
        <div className='grid grid-flow-col gap-20 mt-20'>
            {/* first column footer */}
        <div className=' ml-7 mt-16 text-lg text-white'> 
        Quick Links
        <div  className='mt-5 gap-2 text-sm flex flex-col items-start '>
            <button>Home</button>
             <button>About Us</button>
             <button>Blog</button>
             <button>Contact Us</button>
             <button> Courses</button>
        </div>
        </div>

        {/* second column footer */}

        <div className=' ml-7 mt-16 text-lg text-white'> 
        About
        <div  className='mt-5 gap-2 text-sm flex flex-col items-start'>
            
            <button>Facebook</button>
             <button>Youtube</button>
             <button>Twitter</button>
    
        </div>
        </div>

        {/* third column footer */}

        <div className=' ml-7 mt-16 text-lg text-white'> 
        Contact
        <div  className='mt-5 gap-2 text-sm flex flex-col items-start'>
            <p>Office :</p>
            <p className='flex items-center gap-2'>
                <MdLocationOn/>Tilottama-1, Drivertole Butwal, <br/> Rupandehi</p>
            
            <p className='mt-3'>Technical support :</p>
            <p className='flex items-center gap-2'>  <MdCall/> 977-987654321 </p>
            <p className=' flex items-center gap-2'> <GrMail/> frontend@gmail.com</p>
               
        </div>
        </div>

      {/* fourth column footer */}

      <div className=' ml-7 mt-16 text-lg text-white'> 
      Let us Give you a Call !
        <div  className='mt-5 gap-2 text-sm flex flex-col items-start'>
            
            <p>Leave us your contact number and our representatives will <br/> connect with you soon!!</p>
            <div className='mt-2 '>
            <input className="h-8 w-60 p-2 text-black " type='text' placeholder='frontend@gmail.com'/>
            <button className='bg-orange-500 h-8 w-32 '>Connect with us</button>
            </div>
        </div>
        </div>
 
        </div> 

          {/* for border at bottom */}
          <div className='mt-10 border 1px border-white'></div>
          {/* for height of bg clr and grid */}
          <div className='h-44 grid grid-cols-2'>
            
            {/* for left side */}
           <div>
            <img className="h-20 ml-7 mt-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pAuMdHcV1nCICjjhmXUYBWO2iBIc8x74SqmrIelj7896FuZwUswFR06esbfMGB8trT0&usqp=CAU"/>
            <p className='ml-7 mt-4 text-sm italic text-orange-300 '>" MAKE A HABIT OF CODING FOR THE PURPOSE OF EVOLVING "</p>
            </div>

            {/* for right side */}
            <div className='ml-14 mt-7 text-white text-base flex gap-2 '>
          <p>Terms & Condition </p>
          <p>|</p>
           <p> Privacy Policy </p>
           <p>|</p>
          <p> Lisence Aggrement </p>
          <p>|</p>
          
          </div>
           
             <div className='text-white text-sm mt-16 absolute right-36 '>
                Copyright © 2023, Abhyam Robotics institution of business and technology
             <div className=' mt-5 gap-4 flex'>
                <svg className='h-8 w-8' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"/></svg>
             
             <svg className='h-8 w-8'  xmlns="http://www.w3.org/2000/svg" width="256" height="258" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
               
             <svg className='h-8 w-8 border-blue-950 rounded-full' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#1D9BF0" rx="60"/><path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z"/></g></svg>

             <svg className='h-8   w-8 ' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"/></g></svg>
             </div>
          </div>
          </div>

        </div>
    );
}
export default Footer;