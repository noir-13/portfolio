import React from 'react'

const about = () => {

  const imgSrc = "./pic.png"
 
  
  return (
//      <section id="about" className="flex flex-col items-center justify-center w-full min-h-screen px-10 py-5 sm:gap-5 md:px-20 sm:px-10 lg:px-30 sm:py-10 sm:flex-row " >
//  <img data-aos="zoom-in" src={imgSrc} className='object-cover  h-[300px] sm:h-[450px] mb-3  ' alt="" />


// <img className="absolute top-200 left-0 opacity-60 z-[-1]" src="/gradient.png" alt=""  />
//  <div data-aos="zoom-in"  data-aos-duration="5000" className=" rounded-xl  backdrop-filter bg-opacity-10 backdrop-blur-xl flex-col flex min-w-[300px]   h-[300px] sm:h-[450px]   p-3 sm:p-10 md:p-13 border border-gray-100 hover:shadow-[0px_0px_10px_1px_#68cefe] hover:border-[#68cefe]">
//     <p className="text-xl font-extrabold text-center ">"I'm not stupid, I'm just to lazy to show how smart I am."</p>
//   <p id="txt" className="sm:text-sm text-[10px] text-justify mt-2 md:mt-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio explicabo vel recusandae laborum inventore commodi sed quas eum! Aut officia dolorum maiores vel veniam ad. Ipsum amet explicabo quod.</p>
//  </div>
// </section> 



 <section id="about" className="relative flex flex-col items-center justify-center min-w-full min-h-screen px-10 py-5 pb-10 lg:items-center md:items-start sm:gap-20 md:px-20 lg:px-30 sm:py-10 md:flex-row " >
    
     <img data-aos="zoom-in" src={imgSrc} className='object-cover h-[300px] sm:h-[450px]  rounded-lg mb-5 ' alt="" />
    <div className='flex flex-col items-center justify-center pl-5 md:items-start'>
          <h1  className=' text-2xl font-bold text-[#4789f4]'>Introduction</h1>

      <p  className='mb-5' > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quo labore magnam asperiores voluptates nisi? Voluptas debitis ut commodi laudantium reiciendis nesciunt aspernatur error quod architecto et alias, omnis neque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum deserunt aliquid ipsa repellat. Laudantium, atque vel natus, odio eius illum consectetur ex molestias ut aliquid asperiores distinctio consequuntur magnam laborum.</p>
    
    <div data-aos="zoom-in"   className='flex flex-col flex-wrap items-center justify-center gap-5 lg:justify-start md:flex-row'>

      

          
          <div  className='max-w-[350px] lg:h-[164px] w-full flex flex-col px-4 bg-[#181818] ring-1 ring-[#333232] rounded-md pb-2 lg:pb-0'>
                          <h1 className=' text-2xl font-bold text-[#4789f4] mb-4'>Skills</h1>
                          <div className='flex flex-wrap gap-3'>
                           <p className='bg-[#4789f4] px-1 rounded-md ring-1 ring-[#333232]'>UI/UX</p>
                            <p className='bg-[#4789f4] px-1 rounded-md ring-1 ring-[#333232]'>Web Development</p>
                             <p className='bg-[#4789f4] px-1 rounded-md ring-1 ring-[#333232]'>Responsive Design</p>
                              <p className='bg-[#4789f4] px-1 rounded-md ring-1 ring-[#333232]'>Programming</p>
                               <p className='bg-[#4789f4] px-1 rounded-md ring-1 ring-[#333232]'>Web Design</p>
                               
                          </div>
               
            </div>

             <div className='max-w-[350px] flex flex-col gap-4 p-4'>
                          <h1 className=' text-2xl font-bold text-[#4789f4]'>Tech Stack</h1>

               <div className='grid justify-between grid-cols-3 gap-4 backdrop-filter bg-opacity-10 backdrop-blur-xl' >
            <img src="/atom.png" className='bg-[#181818] ring-1 ring-[#333232] rounded-md  w-[50px] h-[50px] p-2 hover:shadow-[0px_0px_10px_1px_#30a2ff] hover:border-[#30a2ff] transition' />
            <img src="/css-3.png" className='bg-[#181818] ring-1 ring-[#333232] rounded-md  w-[50px] h-[50px] p-2 hover:shadow-[0px_0px_10px_1px_#2196f3] hover:border-[#2196f3] transition' />
            <img src="/html-5.png" className='bg-[#181818] ring-1 ring-[#333232] rounded-md w-[50px] h-[50px] p-2 hover:shadow-[0px_0px_10px_1px_#fc490b] hover:border-[#fc490b] transition' />
            <img src="/java.png" className='bg-[#181818] ring-1 ring-[#333232] rounded-md  w-[50px] h-[50px] p-2 hover:shadow-[0px_0px_10px_1px_#da8b2e] hover:border-[#da8b2e] transition' />
            <img src="/tailwind.svg" className='bg-[#181818] ring-1 ring-[#333232] rounded-md  w-[50px] h-[50px] p-2 hover:shadow-[0px_0px_10px_1px_#68cefe] hover:border-[#68cefe] transition' />
            <img src="/js.png" className='bg-[#181818] ring-1 ring-[#333232] rounded-md w-[50px] h-[50px] p-2 hover:shadow-[0px_0px_10px_1px_#ffdf00] hover:border-[#ffdf00] transition' />
          </div>
            </div>

         
           </div>

    </div>
      
</section> 



  )
}

export default about




