import { Link } from 'react-router-dom'
import Logo from '../assets/tarea.png'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext';

function Navbar() {

  let { user } = useContext(AuthContext)

  let { logoutUser } = useContext(AuthContext)

  return (
    <nav className="flex py-3 bg-zinc-700 mb-4 w-full justify-between">
      <div className='flex flex-row items-center'>
      <Link to='/'>
        <img src={Logo} alt="logo" width='60px' height='40px' className='ml-8' />
      </Link>
      <Link to='/'>
        <p className="font-bold text-xl mb-4 mr-4 ml-4">Home</p>
      </Link>
      <Link to='/'>
        <p className="font-bold text-xl mb-4 mr-4">Contact</p>
      </Link>
      <Link to='/'>
        <p className="font-bold text-xl mb-4 mr-4">About us</p>
      </Link>
      </div>
      <div>
        {!user ? null : <button onClick={logoutUser} className='bg-red-500 p-3 rounded-lg block w-1/8 mx-auto mt-3 mr-8'>Logout</button>}
      </div>
    </nav>
  )
}

export default Navbar