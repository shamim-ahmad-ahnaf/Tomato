import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext';

export default function PlaceOrder() {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p>Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="tel" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
        <div>
          <span>Subtotal: </span><p>${getTotalCartAmount()}</p>
        </div>
        <div>
          <span>Delivery Fee: </span><span>${deliveryFee.toFixed(2)}</span>
        </div>
        <hr />
        <div>
          <span>Total: </span><span>${total.toFixed(2)}</span>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>

      <div className="cart-promocode">
        <p>If you have a promo code, enter it here:</p>
        <div className="car-promocode-input">
          <input 
            type="text" 
            placeholder="Promo code" 
            value={promoCode} 
            onChange={(e) => setPromoCode(e.target.value)} 
          />
          <button onClick={handlePromoSubmit}>Submit</button>
        </div>
      </div>
      </div>
    </form>
  )
}
