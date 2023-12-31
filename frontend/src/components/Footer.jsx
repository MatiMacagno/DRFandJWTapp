import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/tarea.png'

function Footer() {
    return (
        <footer className='flex py-3 bg-zinc-700 w-full bottom-0 mt-4'>
            <div className='flex'>
                <Link to='/'>
                    <img src={Logo} alt="logo" width='60px' height='40px' className='ml-8' />
                </Link>
            </div>
            <div className='ml-4'>
                <Link to='/contact'>
                    <p className="font-bold text-xl mb-4 mr-4 text-[#F4EAE0] hover:text-white">Contact</p>
                </Link>
                <Link to='/about-us'>
                    <p className="font-bold text-xl mb-4 mr-4 text-[#F4EAE0] hover:text-white">About us</p>
                </Link>
            </div>
        </footer>
    )
}

export default Footer