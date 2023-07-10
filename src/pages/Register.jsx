import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="login">
        <section>
            <form>
                <input type="username" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Register</button>
                <h4>Already have an account?</h4>
                <Link to={'/login'}>Login</Link>
            </form>
        </section>
    </div>
  )
}

export default Register