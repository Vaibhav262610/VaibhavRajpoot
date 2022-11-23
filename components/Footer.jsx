import React from 'react'

const Footer = () => {
  return (
      <>
    <div className='h-screen justify-center flex flex-col items-center gap-40'>

        <div className="about-section">
             <div className="about-main-heading">
                 <h1 className="about-heading">&lt;Contact /&gt;</h1>
                 <h1 className=" name-heading font-black" style={{width:470}}>Say Hello</h1>
             </div>
         </div>



         <div className='whyme relative right-80'>
             <p className='pb-8 text-4xl text-green-400 font-semibold'>Get in Touch</p>
            <p className='text-4xl text-gray-400'>I&apos;m available for freelance projects. Let&apos;s work together to create<br/> something worth sharing.</p>
            <br/>
            <div className='flex flex-row gap-5'>
            <button className='resume-btn hover:text-white' >Linkedin</button>
            <button className='github-btn hover:text-white' >Github</button>
            </div>
        </div>

         </div>
        <div className='end mt-20 flex flex-col justify-center items-center'>
            <p className='text-2xl text-gray-400 font-semibold'>Designed and Developed with 💖</p>
            <br/>
            
            <p className='text-2xl text-gray-400 font-black'>by Vaibhav Rajpoot</p>

            <br/>
        </div>
      </>
  )
}

export default Footer