import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Cart() {
  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount(count + 1);
  };
  
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { rows, clearCart } = useOutletContext();

  return (
    <>
      <div className='bg-gray-200 flex justify-center items-center h-16'>
        <p className='font-bold'>Cart</p>
      </div>
      
      <div className="flex mt-10 flex-wrap lg:mt-10 justify-center">
        <table className="w-3/4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">IMAGE</th>
              <th className="border border-gray-300 px-4 py-2 text-left">PRODUCT NAME</th>
              <th className="border border-gray-300 px-4 py-2 text-left">UNIT PRICE</th>
              <th className="border border-gray-300 px-4 py-2 text-left">QTY</th>
              <th className="border border-gray-300 px-4 py-2 text-left">SUBTOTAL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">ACTION</th>
            </tr>
          </thead>
          
          {
            rows.length > 0 ? (
              rows.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <img src={item.images} alt='Product' className="w-16 h-16 object-cover" />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Product Name</td>
                    <td className="border border-gray-300 px-4 py-2">${item.price}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className='flex mr-14'>
                        <button 
                          className='border border-gray-300 w-6 h-6 flex items-center justify-center' 
                          onClick={decreaseCount}
                        >
                          -
                        </button>
                        <p className='border border-top border-gray-300 h-6 w-16 flex items-center justify-center'>
                          {count > 0 ? count : 0}
                        </p>
                        <button 
                          className='border w-6 border-gray-300 h-6 flex items-center justify-center' 
                          onClick={increaseCount}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">${(count * item.price).toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.action}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center py-4">Your cart is empty</td>
                </tr>
              </tbody>
            )
          }
        </table>
      </div>
      
      <div className='mt-4 flex flex-wrap lg:ml-3 mr-3 justify-between items-center'>
        <button className='bg-gray-50 font-bold rounded-xl p-3 hover:bg-purple-500 hover:text-white'>
          Continue Shopping
        </button>
        
        <button 
          className='bg-gray-50 font-bold rounded-xl p-3 hover:bg-purple-500 hover:text-white' 
          onClick={clearCart}
        >
          Clear Shopping Cart
        </button>
      </div>
    </>
  );
}

export default Cart;
