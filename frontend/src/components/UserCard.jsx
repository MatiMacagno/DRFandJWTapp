import React from 'react'
import * as jwt_decode from 'jwt-decode';
import User from '../../../user_image/usuario.png'

function UserCard() {

    const token = localStorage.getItem("authTokens")

    if (token) {
        var decode = jwt_decode.jwtDecode(token)
        var username = decode.username
        var full_name = decode.full_name
        var image = decode.image
        var bio = decode.bio
        var email = decode.email
    }

    return (
        <div className="max-w-sm bg-white mx-auto shadow-lg rounded-lg overflow-hidden my-4">
                <img className="w-42 h-40 mx-auto mb-2 mt-2" src={User} alt="avatar"/>
                <div className="flex items-center px-6 py-3 bg-zinc-700">
                    <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
                        <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
                    </svg>
                    <h1 className="mx-3 text-white font-semibold text-lg">Personal data</h1>
                </div>
                <div className="py-4 px-6">
                    <h1 className="text-2xl font-semibold text-gray-800">{username}</h1>
                    {full_name ? <p className="py-2 text-lg text-gray-700">{full_name}</p> : '' }
                    {bio ? <p className="py-2 text-lg text-gray-700">{bio}</p> : null }
                    <div className="flex items-center mt-4 text-gray-700">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                        </svg>
                        <h1 className="px-2 text-sm">{email}</h1>
                    </div>
                </div>
            </div>
    )
}

export default UserCard