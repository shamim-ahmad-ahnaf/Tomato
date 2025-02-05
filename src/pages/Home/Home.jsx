import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDesplay from '../../components/Food-desplay/FoodDesplay'
import AppDownload from '../../components/App-download/AppDownload'

export default function Home() {


  const [category, setCategory] = useState("All")


  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}  />
        <FoodDesplay category={category} />
        <AppDownload />
    </div>
  )
}
