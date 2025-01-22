import Header from '../../components/Header'
import ExploredMenu from '../../components/ExploredMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay'

export default function Home() {
  const [category,setCategory]=useState('All')
  return (
    <div>
      <Header/>
      <ExploredMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}
