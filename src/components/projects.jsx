import React from 'react'

const projects = () => {

  const imgSrc = "./avatarRed.png"
  const img2 = "./ava.png"

  return (
    <section id="projects" className="flex flex-col items-center justify-center max-w-full min-h-screen gap-5 px-20 py-10  sm:flex-row sm:flex-wrap text-slate-500">
  

 <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      
     id="card" className="duration-500 card taos:opacity-0 taos:translate-y-10">
    <img className="object-cover w-full rounded-md h-[150px] sm:h-[170px]" src={img2} alt="Project Image"/>
    <div className="flex flex-col items-start justify-start">
      <p id="txt" className="mt-1 text-sm font-bold sm:text-md">Inventory Management System</p>
      <p id="txt" className="sm:text-sm text-[10px] font-bold">Java-based system</p>
      <p className="sm:text-sm text-[10px] mt-2 sm:mt-3">A System designed for small to mid-sized businesses. It provides essential features such as real-time stock monitoring, automated transaction logging, and user-based access control. </p>
      <button className="bg-blue-500 px-2 py-1 rounded-sm sm:rounded-md sm:text-sm text-[10px] mt-2 text-white hover:text-blue-500 hover:bg-slate-300 border-blue-500 border-1 transition">Read more</button>
    </div>
 </div>

 <div  data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500"
       id="card" className="card">
    <img className="object-cover w-full rounded-md h-[150px] sm:h-[170px]" src={imgSrc} alt="Project Image"/>
    <div className="flex flex-col items-start justify-start">
      <p id="txt" className="mt-1 text-sm font-bold sm:text-md">Inventory Management System</p>
      <p id="txt" className="sm:text-sm text-[10px] font-bold  ">Java-based system</p>
      <p className="sm:text-sm text-[10px] mt-2 sm:mt-3">A System designed for small to mid-sized businesses. It provides essential features such as real-time stock monitoring, automated transaction logging, and user-based access control. </p>
      <button className="bg-blue-500 px-2 py-1 rounded-sm sm:rounded-md sm:text-sm text-[10px] mt-2 text-white hover:text-blue-500 hover:bg-slate-300 border-blue-500 border-1 transition">Read more</button>
    </div>
 </div>

 <div  data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="2000"
       id="card" className="card">
    <img className="object-cover w-full rounded-md h-[150px] sm:h-[170px]" src={img2} alt="Project Image"/>
    <div className="flex flex-col items-start justify-start">
      <p id="txt" className="mt-1 text-sm font-bold sm:text-md">Inventory Management System</p>
      <p id="txt" className="sm:text-sm text-[10px] font-bold  ">Java-based system</p>
      <p className="sm:text-sm text-[10px] mt-2 sm:mt-3">A System designed for small to mid-sized businesses. It provides essential features such as real-time stock monitoring, automated transaction logging, and user-based access control. </p>
      <button className="bg-blue-500 px-2 py-1 rounded-sm sm:rounded-md sm:text-sm text-[10px] mt-2 text-white hover:text-blue-500 hover:bg-slate-300 border-blue-500 border-1 transition">Read more</button>
    </div>
 </div>

 </section>
  )
}

export default projects