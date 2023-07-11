import { useEffect, useState } from "react"
import { useStore } from "../store"
import axios from "axios"
import { toast } from "react-hot-toast"
import Task from "./Task"

const addTask_url = 'https://express-todo-app-api.onrender.com/api/v1/tasks/add-task'
const getTask_url = 'https://express-todo-app-api.onrender.com/api/v1/tasks/my-tasks'

const Home = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [tasks, setTasks] = useState([])

	const { loading, setLoading } = useStore((state) => state)

	const submitHandler = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			
			const { data } = await axios.post(addTask_url, { title, description }, {
				withCredentials: true,
				headers: { 'Content-Type': 'application/json' }
			})
			setTitle('')
			setDescription('')
			toast.success(data.message)
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message)
		}
		setLoading(false)
	}
	const updateHandler = async (id) => {
		const url = `https://express-todo-app-api.onrender.com/api/v1/tasks/${id}`
		setLoading(true)
		try {
			const { data } = await axios.put(url, {}, { withCredentials: true })
			toast.success(data.message)
		} catch (error) {
			toast.error(error.response.data.message)
		}
		setLoading(false)
	}
	const deleteHandler = async (id) => {
		const url = `https://express-todo-app-api.onrender.com/api/v1/tasks/${id}`
		setLoading(true)
		try {
			const { data } = await axios.delete(url, {}, { withCredentials: true })
			toast.success(data.message)
		} catch (error) {
			toast.error(error.response.data.message)
		}
		setLoading(false)
	}
	useEffect(()=>{
		axios.get(getTask_url, {
			withCredentials: true,
		}).then((res)=>{
			setTasks(res.data.tasks);
		}).catch((err)=>{
			console.log(err)
			toast.error(err.response.data.message)
		})
	}, [tasks])

	return (
		<div className="container">
			<div className="login">
				<section>
					<form onSubmit={submitHandler}>
						<input
							type="text"
							placeholder="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<input
							type="text"
							placeholder="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
						<button disabled={loading} type="submit">Add Task</button>
					</form>
				</section>
			</div>
			<section className="todosContainer">
				{
					tasks.map((task)=>{
						// console.log(task)
						return (
							<Task 
								key={task._id}
								id = { task._id } 
								title={task.title} 
								description={task.description}
								isCompleted={task.isCompleted}
								updateHandler={updateHandler}
								deleteHandler={deleteHandler}
							/>
						)
					})
				}
			</section>
		</div>
	)
}

export default Home
