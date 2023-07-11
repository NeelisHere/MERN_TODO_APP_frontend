import { useStore } from "../store"
import loader from "./loader"

const Profile = () => {
	const { isAuthenticated, loading, user } = useStore(state => state)
	console.log(user)
	return (
		loading? 
		<loader />:
		<div>
			<h1>{user?.username}</h1>
			<p>{user?.email}</p>
		</div>
	)
}

export default Profile
