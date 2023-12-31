import { createContext, useState, useEffect } from 'react'
import * as jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    let [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwt_decode.jwtDecode(localStorage.getItem('authTokens')) : null))
    let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null))
    let [loading, setLoading] = useState(true)

    const registerUser = async (e) => {
        e.preventDefault()
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
                password2: e.target.password2.value,
            })
        })
        if (response.status === 201) {
            navigate('/login')
            toast.success('Register success.', {
                position: 'bottom-center',
            })
        } else {
            console.log(response.status);
            toast.error('Register incomplete', {
                position: 'bottom-center'
            })
        }
    }

    let loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value })
        });

        if (!response.ok) {
            // Manejar errores de red o problemas en el servidor
            toast.error('Invalid credentials', {
                position: 'bottom-center'
            });
            return;
        }

        const data = await response.json();

        if (data && data.access) {
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data);
            setUser(jwt_decode.jwtDecode(data.access));
            navigate('/');
            toast.success('Login success.', {
                position: 'bottom-center',
            });
        }
    }

    let logoutUser = () => {
        // e.preventDefault()
        localStorage.removeItem('authTokens')
        setAuthTokens(null)
        setUser(null)
        navigate('/login')
        toast.success('Logout success.', {
            position: 'bottom-center',
        })
    }

    const updateToken = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh: authTokens?.refresh })
        })

        const data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode.jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        registerUser: registerUser,
    }

    useEffect(() => {
        if (loading) {
            updateToken()
        }

        const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}