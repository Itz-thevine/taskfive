import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import Button from '../button/Button';

const Header = () => {
    const [nav, setNav] = useState('visible');

    const close = () =>{
        setNav('hidden')

        if(nav === 'hidden'){
            setNav('visible')
        }
    }

  return (
     <>
        <div className='bg-mainColorOne flex pr-32'>
            <div className='bg-mainColorTwo font-semibold h-28 w-28 text-2xl flex justify-center items-center' onClick={close}>
                    <AiIcons.AiOutlineMenu/>
            </div>
           
            <div className='text-mainColorTwo text-2xl pl-9 flex items-center font-black flex-1'>
                Store
            </div>
            <div className='flex flex-1 font-medium justify-end items-center hidden lg:flex'>
              <div className='flex text-white justify-center text-2xl items-center mx-4'><AiIcons.AiOutlineSearch/></div>
              <div className='flex text-white justify-center text-2xl items-center mx-4'><AiIcons.AiOutlineHeart/></div>
              <Link to='/cart'>
              <div className='flex text-white justify-center items-center text-2xl mx-4'><AiIcons.AiOutlineShoppingCart/></div>
              </Link>
            <Link to='/login'>
                <Button title='Log In'/>
            </Link> 
            </div>

        </div>
        {
                nav && (
                    <div className='bg-mainColorThree flex justify-center h-16 item-center  items-center font-bold' style={{visibility: nav}}>
                        <Link className='flex justify-center items-center mx-4' to='/'>Home</Link>
                        <Link className='flex justify-center items-center mx-4'  to='/About'>About</Link>
                        <Link className='flex justify-center items-center mx-4'  to='/Contact'>Contact</Link>
                    </div>
                )
            }
     </> 
  )
}

export default Header