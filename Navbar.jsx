import React, { useState } from 'react'
import logo from '/src/logo.png'
 
import { Link } from 'react-router-dom'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen);
  console.log("s")
}
 
  return (
   <>
   <div className='flex flex-col  sticky top-0 z-50 w-full w-auto h-auto p-5  shadow-md  items-center justify-around bg-white  lg:flex-row '>
<img src={logo}/>
<div className=' hidden space-x-1 flex flex-wrap  lg:flex items-center space-x-8 ' >
<Link to="/HOME">

<div className='relative inline-block group '>
  <div className='inline-flex items-center justify-center w-full bg-white font-bold text-gray-500 border-none px-2 py-1 hover:text-amber-700 hover:underline'>
HOME

  </div>

  <div className='hidden group-hover:block absolute
  mt-2 w-56 rounded-md shadow-lg bg-white border-2 '>
<p>Shop Grid Layout</p>
<p>shop Gid Standard</p>
<p>Shop Grid Layout</p>
<p>shop Gid Standard</p>
  </div>

</div>
</Link>
<div className='relative inline-block group'>
  <div className='inline-flex items-center justify-center w-full bg-white font-bold text-gray-500 border-none px-2 py-1 hover:text-amber-700 hover:underline'>
SHOP


  </div>

  <div className='hidden group-hover:block absolute
  mt-2 w-56 rounded-md shadow-lg bg-white border-2 '>
<p>Shop Grid Layout</p>
<p>shop Gid Standard</p>
<p>Shop Grid Layout</p>
<p>shop Gid Standard</p>
  </div>

</div>
<div><p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>COLLECTION</p>
</div>

<div className='relative inline-block group'>
  <div className='inline-flex items-center justify-center w-full  font-bold text-gray-500 border-none px-2 py-1 hover:text-amber-700 hover:underline'>
PAGES
  </div>

  <div className='hidden group-hover:block absolute
  mt-2 w-56 rounded-md shadow-lg bg-white  border-2'>
<p>Cart</p>
<p>Checkout</p>
<p>Wishlist</p>
<p>Login/Register</p>
<p>Compare</p>
  </div>

</div>
<div className='relative inline-block group'>
  <div className='inline-flex items-center justify-center w-full  font-bold text-gray-500 border-none px-2 py-1 hover:text-amber-700 hover:underline'>
BLOG

  </div>

  <div className='hidden group-hover:block absolute
  mt-2 w-56 rounded-md shadow-lg bg-white border-2 '>
<p>Shop Grid Layout</p>
<p>shop Gid Standard</p>
<p>Shop Grid Layout</p>
<p>shop Gid Standard</p>
  </div>

</div>
<div><p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>CONTACT US</p>
</div>
</div>
<div className=" relative group mt-2 lg:hidden">
<button className="" onClick={()=>{toggle()}}>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
</button>
<div className=" absolute hidden group-hover:flex flex-col items-center w-36 bg-white border-2 -left-10 rounded-md">
  <Link to="/HOME">
<p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>HOME</p></Link>
<p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>SHOP</p>
<p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>COLLECTION</p>
<p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>PAGES</p>
<p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>BLOG</p>
<p className=' text-gray-500 font-bold hover:text-amber-700 hover:underline'>CONTACT US</p>
</div>
</div>
<div>

</div>


<div className=' flex lg:flex items-center justify-around  w-auto'>
    <div className=' mx-2 lg:mx-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
</div>
<div className=' mx-2 lg:mx-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='mx-2 lg: mx-4'fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
</div>  
<div className=' mx-2 lg:mx-4'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" className=' mx-2 lg:mx-4'height="25"fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
</div>
<Link to="/Cart">
<button className='  mx-2 lg:mx-4' >
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
</button>
</Link>

</div>


    </div>
   </>
  )
}

export default Navbar
