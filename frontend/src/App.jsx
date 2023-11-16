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
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {

  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <AuthProvider>
          <Navbar />
          <div className='flex-1'>
          <Routes>
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/about-us' element={<AboutUsPage/>} />
            <Route path='/login/' element={<UserIsAuthenticated><LoginPage /></UserIsAuthenticated>}></Route>
            <Route path='/register/' element={<UserIsAuthenticated><RegisterPage /></UserIsAuthenticated>}></Route>
            <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>} />
            <Route path='/tasks' element={<PrivateRoute><TasksPage/></PrivateRoute>} />
            <Route path='/create-tasks' element={<PrivateRoute><TaskFormPage/></PrivateRoute>} />
          </Routes>
          </div>
          <Toaster/>
          <Footer/>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
