import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {

      const {cart} = useSelector((state)=>state);

      const [totalamount , settotalamount] = useState(0);

      useEffect(()=>{
          settotalamount(cart.reduce( (acc , cur) => acc +cur.price, 0 ));
      },[cart])


  return (

      <div className="flex mx-24">

          {
       
                  cart.length > 0 ? 
                  (
                      <div className="flex">
                           <div>
                              {
                                  cart.map((item , index) => {
                                    
                                   return( 
                                    <div>
                                    <CartItem  key={item.id}  item={item} itemindex={index}/>
                                    <hr className="border-2 border-black mt-5"/> 
                                    </div>
                                   )
                                  
                              })

                              }
                              <br/>
                                     
                          </div>
                                               
                            
                            <div className="p-5">
                                  <div>
                                      <div className="font-bold text-2xl mx-5 mt-5 text-green-400">Your Cart</div>
                                      <div className="font-bold text-2xl mx-5 mt-2 text-green-400">Summary</div>

                                      <div>
                                      <p className="font-bold text-2xl mx-5 mt-5 text-green-400" > 
                                      Total Items : {cart.length}
                                      </p>
                                     </div>
                                 </div>   
                                 <div>
                              <p className="font-bold text-2xl mx-5 mt-5 text-green-400">
                                    Total Ammount : ${totalamount};
                              </p>

                              <button className="font-bold text-2xl mx-5 mt-5 text-white bg-green-400 border rounded-md p-3 text-center hover:bg-green-800 mx-24">CheckOut Now</button>

                          </div> 
                           </div>
                           

                      </div>

                  )
                  :
                  (
                    <div className="w-full h-full mt-36 flex flex-col justify-center items-center">
                          <h1 className="font-bold text-3xl ">Cart Is Empty</h1>
                          <NavLink to="/" >
                            <button className="bg-green-400 text-white p-4 mt-5 rounded-md hover:bg-green-900">Shop Now</button>
                          </NavLink>


                    </div>
                  )


       

          }


       
     </div>



  )
};

export default Cart;
