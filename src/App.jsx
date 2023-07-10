import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './pages/Header'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/Register'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/profile' element={ <Profile/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/register' element={ <Register/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
