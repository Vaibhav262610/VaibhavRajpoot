import Link from 'next/link'
import React from 'react'

const WhyMe = () => {
  return (
    <>
    
    <div className='h-screen justify-center flex flex-col items-center gap-40'>

        <div className="about-section">
             <div className="about-main-heading">
                 <h1 className="about-heading">&lt;About /&gt;</h1>
                 <h1 className=" name-heading font-black" style={{width:450}}>Why Me?</h1>
             </div>
         </div>



         <div className='whyme relative right-80 sm:ml-40'>
             <p className='pb-8 text-4xl text-green-400 font-semibold'>Why Me?</p>
            <p className='text-4xl text-gray-400'>There's nothing I enjoy more than developing good websites and <br />webApps for Cool people. I believe that people should do things they<br /> are good at or in which their Hearts 💖 lie. That's why I choose <br /> freelance web development as my career.</p>
            <br/>
            <p className='pb-8 text-4xl text-gray-400'>I've spent many years trying to perfect what I do and while I'll never <br /> be perfect, I do my best to come close.</p>
            <p className='text-4xl text-white font-bold'>If you've got a project you'd like to work on with me just get in <br/> touch and we can get to work!</p>
            <Link href="/contact" >
              <button className='mt-8 contact-btn hover:text-white' >Contact Now</button>
            </Link>
        </div>
         </div>
    </>
  )
}

export default WhyMe