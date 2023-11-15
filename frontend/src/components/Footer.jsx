import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/tarea.png'

function Footer() {
    return (
        <footer className='flex py-3 bg-zinc-700 w-full fixed bottom-0'>
            <div className='flex'>
                <Link to='/'>
                    <img src={Logo} alt="logo" width='60px' height='40px' className='ml-8' />
                </Link>
            </div>
            <div className='ml-4'>
                <Link to='/'>
                    <p className="font-bold text-xl mb-4 mr-4">Contact</p>
                </Link>
                <Link to='/'>
                    <p className="font-bold text-xl mb-4 mr-4">About us</p>
                </Link>
            </div>
        </footer>
    )
}

export default Footer