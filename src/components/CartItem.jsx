import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import { remove } from '../redux/Slices/cartSlice';



const CartItem = ({item , index}) => {

  const dispatch = useDispatch();

  function removehandler(){

            dispatch(remove(item.id));
            toast.error("remove item from cart ")


  }

  return (

           

            <div className='flex max-w-3xl mt-2'>

                      <div className='h-[250px] w-[350px]  mt-6 mr-4'>
                        <img src={item.image} className='h-full w-full' />
                      </div>
                      <div>
                            <h1 className='mt-5 mx-10 font-semibold'>{item.title}</h1>
                            <h1 className='mt-5 mx-10 text-sm text-gray-400'>{item.description}</h1>
                            <div className='flex justify-between mx-10 mt-10'>
                              <p>${item.price}</p>
                              <div className='bg-red-500 rounded-full w-6 h-6 pt-1 px-1 mr-10'>
                                <button  onClick={removehandler}>
                                  <FcDeleteDatabase/>
                                </button>
                              </div>
                            </div>
                            <br/>
                                    
                      </div>
                      <br/>
                      


           </div>
  )
};

export default CartItem;
