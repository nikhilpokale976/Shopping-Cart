import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify";


import { remove , add } from '../redux/Slices/cartSlice';

const Product = (props) => {
  const post = props.post;
const {cart} = useSelector((state) => state);
const dispatch = useDispatch();

function removeHandler(){
    dispatch(remove(post.id));
    toast.error("remove from Cart");
}
function AddHandler(){
  dispatch(add(post));
  toast.success("Add To cart ");

}

  return (
    <div className='flex flex-col  items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-md 
    gap-3 p-4 mt-10 ml-5  '>
          <div > 
            <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-[40] mt-1'>{post.title.split(" ").slice(0,2).join(" ")+ "..."}</h1>
          </div>
          <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
          </div>
          <div className='h-[130px] w-[100px] p-2'>
              <img src={post.image} className='h-full w-full' />
          </div>
    
     <div className='flex justify-between gap-5 mt-3'>

        <div >
          <p className='text-green-600 font-semibold items-center w-full mt-5'>${post.price}
          </p>
          </div>

          <div>
            {
                cart.some((p) => p.id === post.id)?
                (<button 
                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 mt-4 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                onClick={removeHandler}
                >Remove item</button>)
                :
                (<button
                   className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] mt-4 p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
               
                onClick={AddHandler}
                >Add To Cart</button>)




            }
          </div>
        </div>  
          
      
    </div>
  );
}

export default Product;
