import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
        <section>
            <form>
                <input type="username" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Login</button>
                <h4>Do not have an account?</h4>
                <Link to={'/register'}>Create New Account</Link>
            </form>
        </section>
    </div>
  )
}

export default Login
