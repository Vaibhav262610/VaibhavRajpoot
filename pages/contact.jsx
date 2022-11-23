import React from 'react'
import Navbar from '../Components/Navbar'


const Contact = () => {
  return (
      <>
       <head>
      <title>Contact - Vaibhav Rajpoot</title>
    </head>
      <Navbar />
        <div className='h-screen justify-center flex flex-col items-center gap-40'>

<div className="about-section">
     <div className="about-main-heading">
         <h1 className="about-heading">&lt;Contact /&gt;</h1>
         <h1 className=" name-heading font-black" style={{width:470}}>Say Hello</h1>
     </div>
 </div>



 <div className='relative right-80 sm:ml-40'>
     <p className='pb-8 text-4xl text-green-400 font-semibold'>Get in Touch</p>
    <p className='text-4xl text-gray-400'>Im available for freelance projects. Let's work together to create<br/> something worth sharing.</p>
    <br/>
    <div className='flex flex-row gap-5'>
        <a href='#' target='_blank'>
            <button className='contact-btn hover:text-white' >Mail</button>
        </a>
    <a href='https://www.linkedin.com/feed/' target='_blank'>
        <button className='resume-btn hover:text-white' >Linkedin</button>
    </a>
    <a href='https://github.com/Vaibhav262610' target='_blank'>
        <button className='github-btn hover:text-white' >Github</button>
    </a>
    </div>
</div>

 </div>
      </>
  )
}

export default Contact