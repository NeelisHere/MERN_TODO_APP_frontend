
const Task = (props) => {
	const { 
		id,
		title, 
		description, 
		isCompleted,
		updateHandler,
		deleteHandler,
	} = props

	return (
		<div className="todo">
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div>
				<input 
					type="checkbox" 
					checked={ isCompleted } 
					onChange={()=>{
						updateHandler(id)
					}}
				/>
				<button 
					onClick={()=>{
						deleteHandler(id)
					}} 
					className="btn"
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Task