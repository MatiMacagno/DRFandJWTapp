import React from 'react'
import UserCard from '../components/UserCard';

function HomePage () {

  return (
    // Podria ser una card mostrando info del usuario.
    <div className='max-w-xl mx-auto'>
      <h2 className="font-bold text-3xl mb-4 text-center">Your profile</h2>
      <UserCard/>
    </div>
    )
}

export default HomePage