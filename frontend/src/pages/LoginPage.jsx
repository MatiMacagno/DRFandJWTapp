import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    const navigate = useNavigate()

    return (
        <div className='max-w-xl mx-auto'>
            <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">User login</h2>
            <form onSubmit={loginUser}>
                <label className='font-semibold text-lg text-[#F4EAE0]'>Email</label>
                <input type="text" name="email" placeholder="Email" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
                <label className='font-semibold text-lg text-[#F4EAE0]'>Password</label>
                <input type="password" name="password" placeholder="Password" className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"/>
                <input type="submit" value='Login'  className="bg-indigo-500 p-3 rounded-lg block w-1/2 mx-auto mt-3 cursor-pointer"/>
            </form>
            <div>
                <p className='font-semibold mt-4 text-lg text-[#F4EAE0]'>You don't have a user? Sign up here!</p>
                <button onClick={() => navigate('/register')} className='bg-green-500 p-3 rounded-lg block w-1/2 mx-auto mt-3 text-[#F4EAE0]'>Sign up</button>
            </div>
        </div>
    )
}

export default LoginPage