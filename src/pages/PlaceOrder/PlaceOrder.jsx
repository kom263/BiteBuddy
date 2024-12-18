import React,{useContext} from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  
  const {getTotalCartAmount} = useContext(StoreContext);
  return (

   
   
      <form className='place-order'>
        <div className="place-order-left">
         <p className="title">Delivery Information</p>
         <div className="multi-fields">
           <input type="text"  placeholder='First name' />
           <input type="text"  placeholder='Last name'/>
          </div>
         <input type="email"  placeholder='Email address'/>
         <input type="text"  placeholder='street' />
        
        <div className="multi-fields">
           <input type="text"  placeholder='city' />
           <input type="text"  placeholder='state'/>
         </div>

         <div className="multi-fields">
           <input type="text"  placeholder='zip code' />
           <input type="text"  placeholder='Country'/>
         </div>
         <input type="text" placeholder='Phone' />
        </div> 
        <div className="place-order-right">

        </div>
      </form>
    
  )
}

export default PlaceOrder
