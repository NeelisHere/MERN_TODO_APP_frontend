import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './pages/Header'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import axios from 'axios'
import { useStore } from './store'

const App = () => {

	const {  setAuthStatus, setUser } = useStore((state)=>state)

	useEffect(() => {
		axios.get('https://express-todo-app-api.onrender.com/api/v1/users/user-profile',{
			withCredentials: true
		}).then((res) => {
			setUser(res.data.user)
			setAuthStatus(true)
		}).catch((err)=>{
			console.log(err.response.data.message)
			setUser({})
			setAuthStatus(false)
		})
	}, [])

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/profile' element={ <Profile/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/register' element={ <Register/> }/>
            </Routes>
            <Toaster />
        </BrowserRouter>
    )
}

export default App
