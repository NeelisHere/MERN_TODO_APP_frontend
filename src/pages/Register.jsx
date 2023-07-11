import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useStore } from '../store'
import { useNavigate } from 'react-router-dom';

const register_url = 'https://express-todo-app-api.onrender.com/api/v1/users/register'
const req_config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}

const Register = () => {
    const [userData, setUserData] = useState({
        'username':'', 
        'email': '', 
        'password': ''
    })

    const { setAuthStatus, loading, setLoading } = useStore((state) => state)
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post(register_url, userData, req_config) 
            toast.success(data.message)
            setAuthStatus(true)
            navigate('/');
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
            setAuthStatus(false)
        }
        setLoading(false)
    }

    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input 
                        type="username" 
                        placeholder="username"
                        value={userData.username} 
                        onChange={(e)=>setUserData({...userData, username: e.target.value })}
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="email"
                        value={userData.email} 
                        onChange={(e)=>setUserData({...userData, email: e.target.value })}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="password"
                        value={userData.password} 
                        onChange={(e)=>setUserData({...userData, password: e.target.value })}
                        required
                    />
                    <button disabled={loading} type="submit">Register</button>
                    <h4>Already have an account?</h4>
                    <Link to={'/login'}>Login</Link>
                </form>
            </section>
        </div>
    )
}

export default Register