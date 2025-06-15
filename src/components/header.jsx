import 'boxicons/css/boxicons.min.css'
import pdf from "/js.pdf"

 import { Link, Element } from "react-scroll";
import { useState } from 'react';

 

const header = () => {

 const visible = () => {
  document.getElementById("sidebar").classList.toggle("hidden");
 }

 const navigate = (sections) => {
  document.getElementById(sections).scrollIntoView({behavior: 'smooth'})

 }

 const [count, setCount] = useState(0);

 const [disabled, setDisabled] = useState(false);

   const handleClick = (e) => {
    if (disabled) {
      e.preventDefault(); // Prevent download
      return;
    }
    setDisabled(true);
  };
  return (
    <header className="fixed min-w-full text-[#4789f4] top-0 flex  items-center justify-between px-4 py-4 lg:px-20 z-[100] backdrop-filter backdrop-blur-md">
        <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"  className="m-0 text-3xl font-light md:text-4xl " onClick={()=>navigate("home") }>Kazu</h1>

        <nav className="items-center hidden gap-12 md:flex">
            <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1500" className="z-50 text-xl tracking-wider transition-colors hover:text-white" onClick={()=>navigate("about")}>About Me</a>
               
            <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="2000"  className="z-50 text-xl tracking-wider transition-colors hover:text-white"onClick={()=>navigate("projects")}>Projects</a>
            <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="2500"  className="z-50 text-xl tracking-wider transition-colors hover:text-white"onClick={()=>navigate("contact")}>Contact</a>
            <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="3000" id='dl'  className="z-50 text-xl tracking-wider transition-colors text-white hover:text-white bg-[#4789f4] px-3  py-1 rounded-lg " href={pdf} download={pdf} onClick={handleClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? 0.5 : 1 }}
   >Download CV </a>
     
        </nav>

        <button data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1500" onClick={visible} className='inline-block md:hidden '>
          <i className=' bx bx-menu bx-md'></i>
        </button>

        <ul id="sidebar" className=" shadow-2xl bg-[#0c0c0c] backdrop-blur-2xl backdrop-filter hidden  fixed flex-col top-0 right-0 h-screen w-[180px] p-3 space-y-4 z-50" >
        <li><a onClick={visible} className="inline-block cursor-pointer md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/></svg></a></li>
        <li><a className="text-xl hover:opacity-75" onClick={()=>navigate("about") }>About me</a></li>
        <li><a className="text-xl hover:opacity-75" onClick={()=>navigate("projects")}>Projects</a></li>
        <li><a className="text-xl hover:opacity-75" onClick={()=>navigate("contact")}>Contact</a></li>
        <li> <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="3000" id='dl'  className="z-50 text-xl tracking-wider transition-colors text-white hover:text-white bg-[#4789f4] px-3  py-1 rounded-lg " href={pdf} download={pdf} onClick={handleClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? 0.5 : 1 }}
   >Download CV </a></li>
        
      </ul>
    </header>
  );
}



export default header

