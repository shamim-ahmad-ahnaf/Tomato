import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder() {

  const { cartItems, food_list } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = food_list.reduce((total, item) => {
    return total + (cartItems[item._id] > 0 ? item.price * cartItems[item._id] : 0);
  }, 0);

  // Set delivery fee and calculate total
  const deliveryFee = 5.99;
  const total = subtotal + deliveryFee;

  // Handle promo code
  const handlePromoSubmit = () => {
    alert(`Promo code ${promoCode} applied!`);
  };

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p>Delivery information</p>
        {/* Delivery Info Fields */}
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
            <span>Subtotal: </span><span>${subtotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Delivery Fee: </span><span>${deliveryFee.toFixed(2)}</span>
          </div>
          <hr />
          <div>
            <span>Total: </span><span>${total.toFixed(2)}</span>
          </div>
          <button onClick={() => navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  );
}
