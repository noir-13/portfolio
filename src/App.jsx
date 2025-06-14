import Header from "./components/header";
import Home from "./components/home"
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import  Footer  from "./components/footer";

import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect, useState } from "react";


export default function App (){

  useEffect(()=> {
    AOS.init({
        duration: 1500,
        once: false,
    })
  })

  



    
    return (
        <>
        
         <main>
            <img className="absolute top-0 right-0 opacity-60 z-[-1]" src="/gradient.png" alt="" />
            <div className="h-0 w-[40rem] absolute top-[20%] right-[5%] z-[-100] shadow-[0_0_900px_20px_#4789f4] -rotate-[30deg]"></div>
 
             
              <Header></Header>
              <Home></Home>
                
              <About></About>
 <img className="absolute top-200 right-0 opacity-60 z-[-1]" src="/gradient.png" alt="" />
                <Projects></Projects>
                 <img className="absolute top-200 left-0 opacity-60 z-[-1]" src="/gradient.png" alt="" />
                <Contact></Contact>
                <Footer></Footer>
 
         
        </main> 
      
        </>
     
    );
}