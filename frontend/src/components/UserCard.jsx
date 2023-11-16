import React from 'react'
import * as jwt_decode from 'jwt-decode';

function UserCard() {

    const token = localStorage.getItem("authTokens")

    if (token) {
        const decode = jwt_decode.jwtDecode(token)
        var username = decode.username
        var full_name = decode.full_name
        var image = decode.image
    }

    return (
        <div className='max-w-md mx-auto bg-zinc-700 p-3 rounded-lg mb-4 border-2 border-[#E1C78F]'>
            <h3 className='font-bold text-3xl text-[#F4EAE0]'>Your username</h3>
            <p className='font-semibold mb-4 text-md text-[#E1C78F]'>{username}</p>
            <h3 className='font-bold text-3xl text-[#F4EAE0]'>Your full name</h3>
            <p className='font-semibold mb-4 text-md text-[#E1C78F]'>{full_name}</p>
            <h3 className='font-bold text-3xl text-[#F4EAE0]'>Your avatar</h3>
            <p className='font-semibold mb-4 text-md text-[#E1C78F]'>{image}</p>
        </div>
    )
}

export default UserCard