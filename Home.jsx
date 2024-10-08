import React from 'react'
import { useRef } from 'react'
import mainnimg from '/src/mainimg.avif'
import heroimg from '/src/heroimg.avif'
import Card from './Card'
import image1 from '/src/assets/images/image1.jpg'
import image2 from '/src/assets/images/image2.jpg'
import image3 from '/src/assets/images/image3.jpg'
import image4 from '/src/assets/images/image4.jpg'
import image5 from '/src/assets/images/image5.jpg'
import image6 from '/src/assets/images/image6.jpg'
import image7 from '/src/assets/images/image7.jpg'
import image8 from '/src/assets/images/image8.jpg'
import image9 from '/src/assets/images/image9.jpg'
import image10 from  '/src/assets/images/image10.jpg'
import Blogs from './Blogs'
import blog1 from '/src/blog1.jpg'
import blog2 from '/src/blog.jpg'
import blog3 from '/src/blog-3.jpg'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
function Home() {
    const sectionRef = useRef(null); 

    const scrollToSection = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' }); 
      }
    };
  const {addCart}= useOutletContext();  
    
    const imgList=[
        image1,image2,image3,image4,image5
    ]
    const imgList2=[
        image6,image7,image8,image9,image10
    ]
    const blogs =[
        blog1,blog2,blog3
    ]
    const text = [
        "A guide to latest trends",
        "A guide to latest trends",
        "Tips on having a happy life"
      ]
  return (
   <>

<div className='flex flex-col flex-wrap h-auto  '> 
 <div className=' relative bg-[url("heroimg.avif")] bg-cover bg-no-repeat w-auto   h-96 lg:h-screen'>
 <div className=' absolute  right-20 mb-10 lg:ml-96 mt-52 flex flex-col justify-center items-center '>
       
       <p class="text-lg font-semibold mb-6 font-serif lg:text-7xl mb-3">Stylish </p>
       <p class="text-lg font-semibold mb-6 font-serif lg:text-8xl mb-3">Male Clothes</p>
       <p class="text-lg font-semibold mb-6 font-serif lg:text-6xl mb-3">30% Off</p>

           <button className='bg-blue-100   hover:bg-purple-500 hover:text-white border-1 border-black h-6 w-16  lg:h-16 w-44 rounded-md'>
       <p className='font-semibold' onClick={scrollToSection}>SHOP NOW</p>
      </button>
     
   </div>
 </div>
 

    
</div>

   

   <div className=' flex flex-col mt-6 items justify-center  lg:flex-row items-center justify-around mt-4 '>
<div className='   shadow-lg  lg:w-64 h-32  ' >
    <div className='flex justify-center hover:animate-bounce'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
</div>
<p className='text-center font-semibold mb-2'>Free Shipping</p>
<p className='text-center'>Lorem ipsum dolor sit amet<br/> consectetu adipisicing elit sed</p>
</div>
<div  className='  w-auto shadow-lg mt-3  lg:w-64 h-32' >
<div className='flex justify-center hover:animate-bounce'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
</svg>
</div>
<p className='text-center font-semibold mb-2'>Support 24/7</p>
<p className='text-center'>Lorem ipsum dolor sit amet<br/> consectetu adipisicing elit sed</p>
</div>
<div className=' shadow-lg mt-3  lg:w-64 h-32  '>
<div className='flex justify-center hover:animate-bounce'>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
</svg>
</div>
<p className='text-center font-semibold mb-2'>Money Return</p>
<p className='text-center'>Lorem ipsum dolor sit amet<br/> consectetu adipisicing elit sed</p>
</div>
   </div>
   <h2 className='mt-6 font-bold text-center text-4xl'>New Arrival</h2>
   <p className='text-center mt-2'>Lorem ipsum dolor sit amet</p>
<div ref={sectionRef} className=' flex flex-wrap space-y-3 space-x-3   lg:  mt-6 items-center justify-around'>
    {imgList.map((images,index)=>(
        <Card key={index} images={images} addCart={addCart}/>
    ))
}
   
   
    
</div>
<div className=' flex flex-wrap space-y-3 space-x-3  lg:mt-6 items-center justify-around'>
    {imgList2.map((images,index)=>(
        <Card key={index} images={images} addCart={addCart}/>
    ))
}
   
   
    
</div>

<div class="  flex items-center justify-center mt-6">
    <div class="border-t-2 border-gray-500 w-20 mr-2"></div>
    <span class="text-lg font-bold text-4xl">Our Blogs</span>
    <div class="border-t-2 border-gray-500 w-20 ml-2"></div>
  </div>
<div className=' flex  overflow-hidden flex-wrap   lg:mt-4 relative  justify-around'>
{
    blogs.map((blogg,index)=>(
        <Blogs key={index}blogg={blogg}/>
    ))
}

   
</div>


   </>
  )
}

export default Home
