import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const contact = () => {
  return (
    <section id="contact" className="flex items-center justify-center w-full min-h-screen gap-5 px-10 py-20" >
 
  <form   data-aos="zoom-in" action="https://api.web3forms.com/submit" method="POST" className=" text-black hover:scale-103 transition-transform max-h-[700px] max-w-[800px] h-auto w-full flex flex-col justify-start items-start sm:py-5 sm:px-10 px-3 py-3 text-center shadow-2xl rounded-2xl shadow-black ">
    
    <input type="hidden" name="access_key" value="f429c865-9ddb-42ed-8cf5-adad055a6f71" />
    
    <div className="flex flex-col gap-3 mb-5 text-center text-white">
      <h1 className="text-3xl font-bold text-center text-[#4789f4] sm:text-7xl md:text-5xl lg:text-7xl justify-items-center ">Let's Connect</h1>
      <p className="sm:text-sm md:text-[11px] lg:text-sm text-[9px] ">If you have any inquiries or potential collaborations, feel free to reach out. I look forward to discussing how we can work together to bring ideas to life.</p>
    </div>
    <label className='text-white' htmlFor="name">Full Name</label>
    <input id="name"  name="name" type="text" placeholder="Full Name" className="w-full h-10 px-2 mt-3 mb-5 rounded-md shadow-inner shadow-black focus:outline-none focus:border-slate-200 focus:border-2" required />

     <label className='text-white' htmlFor="email">Email</label>
    <input id="email" name="email" type="email" placeholder="Email" className="w-full h-10 px-2 mt-3 mb-5 rounded-md shadow-inner shadow-black focus:outline-none focus:border-slate-200 focus:border-2" required />

    <label className='text-white' htmlFor="mess">Message</label>
    <textarea id="mess" name="Message" className="w-full px-2 mt-3 mb-5 rounded-md shadow-inner h-[250px] shadow-black focus:outline-none focus:border-slate-200 focus:border-2"  placeholder="Message" required></textarea>
  
    <input type="hidden" name="from_name" value="Website user" />
    <input type="hidden" name="subject" value="New Message" />
    
  <button type="submit" className="w-full h-10 bg-[#4789f4] px-2 py-1 rounded-sm sm:rounded-md sm:text-lg text-[10px] mt-2 text-white hover:text-blue-500 hover:bg-slate-300 border-blue-500 border-1 transition">Send Message</button>




  </form>




 </section>
  )
}

export default contact