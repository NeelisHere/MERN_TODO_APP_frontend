import { useNavigate } from "react-router-dom"
import { useStore } from "../store"
import Loader from "./loader"

const Profile = () => {
	const { isAuthenticated, loading, user } = useStore(state => state)
	const navigate = useNavigate()
	if(!isAuthenticated){
		navigate('/login')
	}
	return (
		loading? 
		<Loader />:
		<div>
			<h1>{user?.username}</h1>
			<p>{user?.email}</p>
		</div>
	)
}

export default Profile
