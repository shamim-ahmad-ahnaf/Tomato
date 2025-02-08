import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, food_list, setCartItems } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');

  const navigate = useNavigate();

  const handleRemove = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      delete updatedCart[itemId]; 
      return updatedCart;
    });
  };

  const handlePromoSubmit = () => {
    alert(`Promo code ${promoCode} applied!`);
  };

  const subtotal = food_list.reduce((total, item) => {
    return total + (cartItems[item._id] > 0 ? item.price * cartItems[item._id] : 0);
  }, 0);

  const deliveryFee = 5.99;
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item-items" key={item._id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p>
                  <button onClick={() => handleRemove(item._id)}>Remove</button>
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
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
        <button onClick={() =>navigate('/placeOrder')}>PROCEED TO CHECKOUT</button>
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
  );
}
