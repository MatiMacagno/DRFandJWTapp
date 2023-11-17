import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function RegisterPage() {

  let {registerUser} = useContext(AuthContext)

  return (
      <div className='max-w-xl mx-auto'>
            <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">User register</h2>
          <form onSubmit={registerUser}>
          <label className='font-semibold text-lg text-[#F4EAE0]'>Email</label>
              <input type="text" name="email" placeholder="Email" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
              <label className='font-semibold text-lg text-[#F4EAE0]'>Username</label>
              <input type="text" name="username" placeholder="Username" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
              <label className='font-semibold text-lg text-[#F4EAE0]'>Password</label>
              <input type="password" name="password" placeholder="Password" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
              <label className='font-semibold text-lg text-[#F4EAE0]'>Confirm password</label>
              <input type="password" name="password2" placeholder="Confirm password" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
              <input type="submit" value='Sign up' className='bg-green-500 hover:bg-green-400 p-3 rounded-lg block w-1/2 mx-auto mt-3 cursor-pointer'/>
          </form>
      </div>
  )
}

export default RegisterPage