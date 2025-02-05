import React, { useContext } from 'react';
import './FoodDesplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../Food-item/FoodItem';

export default function FoodDesplay({ category }) {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-desplay" id='food-desplay'>
            <h2>Top Dishes Near You</h2>
            <div className="food-list">
                {food_list.map((item, index) => {

                    if (category === 'All' || category === item.category) {
                      return  <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />

                    }

                })}
            </div>
        </div>
    );
}
