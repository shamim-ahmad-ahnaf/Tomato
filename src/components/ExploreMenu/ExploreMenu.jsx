import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-Menu' id='explore-Menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-Menu-text'>Get your favourite food at your doorstep. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptas provident nesciunt iste odit non pariatur architecto quae adipisci ea</p>
        <div className='explore-Menu-list'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev =>prev===item.menu_name? "All" :item.menu_name)} className='explore-Menu-list-item' key={index}>
                        <img className={category===item.menu_name? "active" : ""} src={item.menu_image} alt={item.title} />
                        <p>{item.menu_name}</p>
                        <h1>{item.title}</h1>
                        
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}
