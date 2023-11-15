import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from "./pages/HomePage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserIsAuthenticated from './utils/UserIsAuthenticated';

function App() {

  return (
    <BrowserRouter>
      <div className='h-screen'>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/login/' element={<UserIsAuthenticated><LoginPage /></UserIsAuthenticated>}></Route>
            <Route path='/register/' element={<UserIsAuthenticated><RegisterPage /></UserIsAuthenticated>}></Route>
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          </Routes>
          <Toaster/>
          <Footer/>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
