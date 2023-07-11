import { Link } from 'react-router-dom'
import { useStore } from '../store'
// import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const logout_url = 'https://express-todo-app-api.onrender.com/api/v1/users/logout'
const req_config = {
	withCredentials: true
}


const Header = () => {
    const { isAuthenticated, setAuthStatus, loading, setLoading } = useStore((state) => state)
    const navigate = useNavigate();
    const logoutHandler = async () => {
		setLoading(true)
		try {
			const { data } = await axios.get(logout_url, req_config)
			console.log(data)
			toast.success(data.message)
			setAuthStatus(false)
			navigate('/login');
		} catch (error) {
			toast.error(error.response.data.message)
			console.log(error)
			setAuthStatus(true)
		}
        setLoading(false)
	}
    return (
        <nav className='header'>
            <div>
                <h2>Todo App</h2>
            </div>
            <article>
                <Link to={'/'}>Home</Link>
                <Link to={'/profile'}>Profile</Link>
                {
                    isAuthenticated ? 
                    <button disabled={loading} onClick={logoutHandler} className='btn'>Logout</button> 
                    : <Link to={'/login'}>Login</Link>
                }

            </article>
        </nav>
    )
}

export default Header
