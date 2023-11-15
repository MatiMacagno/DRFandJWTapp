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
        <div className='max-w-md mx-auto bg-zinc-700 p-3 rounded-lg mb-4'>
            <label className='font-semibold text-lg'>Your username</label>
            <p className='font-semibold mb-4 text-md'>{username}</p>
            <label className='font-semibold text-lg'>Your full name</label>
            <p className='font-semibold mb-4 text-md'>{full_name}</p>
            <label className='font-semibold text-lg'>Your avatar</label>
            <p className='font-semibold mb-4 text-md'>{image}</p>
        </div>
    )
}

export default UserCard