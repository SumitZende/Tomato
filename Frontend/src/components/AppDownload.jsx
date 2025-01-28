import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export default function AppDownload() {
  return (
    <div className='m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium' id='mobileApp-download'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className="flex justify-center gap-[max(2vw,10px)] mt-[40px]">
            <img className='w-[max(30vw,120px)] max-w-[180px] duration-75 cursor-pointer hover:scale-105 ' src={assets.play_store} alt="" />    
            <img className='w-[max(30vw,120px)] max-w-[180px] duration-75 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
        </div>    
    </div>
  )
}
