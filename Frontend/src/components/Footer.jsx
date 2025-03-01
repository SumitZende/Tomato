
import { assets } from '../assets/frontend_assets/assets'

export default function Footer() {
  return (
    <div className='mt-24 text-Light-Silver bg-Darck-Charcol flex flex-col items-center gap-5 py-5 px-[8vw] pt-5' id='footer'>
        <div className="w-full grid grid-cols-2fr gap-[80px] 
                        max-sm:flex max-sm:flex-col max-sm:gap-9">
            <div className="flex flex-col items-start gap-[20px]">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quis praesentium ducimus animi corrupti. Maiores ex tempora quia eos magni eligendi eius porro, quod vel facilis, quidem sed, nihil nisi.</p>
                <div className="w-[40px] mr-[15px] flex items-center gap-2">
                    <img src={assets.facebook_icon}  alt="facebook_icon" />
                    <img src={assets.linkedin_icon}  alt="linkedin_icon" />
                    <img src={assets.twitter_icon}   alt="twitter_icon" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
                <h2 className='text-white text-2xl font-medium'>Tomato</h2>
                <ul>
                  <li className='list-none cursor-pointer '>Home</li>
                  <li className='list-none cursor-pointer '>About us</li>
                  <li className='list-none cursor-pointer '>Delivery</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h2 className='text-white text-2xl font-medium'>Get In Touch</h2>
              <ul>
                <li className='list-none cursor-pointer '>+91158673333</li>
                <li className='list-none cursor-pointer '>sumitzende1012@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr className='w-full h-[2px] m-[20px] bg-gray-400 border-none' />
        <p className="footer-copyright max-sm:text-center">
          Copyright 2025 © sumitzende1012@gmail.com
        </p>
    </div>
  )
}
