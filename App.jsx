import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import Cart from './assets/Components/Cart'
import Navbar from './assets/Components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './assets/Components/Home'
import Footer from './assets/Components/Footer'
import image1 from '/src/assets/images/image1.jpg'
import image2 from '/src/assets/images/image2.jpg'
import image3 from '/src/assets/images/image3.jpg'
import image4 from '/src/assets/images/image4.jpg'
import image5 from '/src/assets/images/image5.jpg'

function App() {
  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount(count + 1);
  };
  
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
 
  const [cartItems, setCartItems] = useState([]);
  const[rows,setRows]=useState([]);
  const addCart = (images,count,index) => {
   
    console.log(images)
  
    console.log("added to cart")
    const newRow = {  images:images,price:'29.88',qty:{count},subtotal:'{count}*29.88',action:'nothing',key:index };
  setRows([...rows,newRow]);
  
  // setCartItems([...cartItems,newRow]);
  }
 const clearCart = () =>{
  setRows([]);
  
 }

  return (
    <>
    <Navbar/>
    <Outlet context={{cartItems,addCart,rows,clearCart,decreaseCount,increaseCount,count}}/>
    <Footer/>


    </>
  )
}

export default App
