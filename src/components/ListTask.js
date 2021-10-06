import Task from './Task';

const ListTask = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="mt-5">
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </div>
    )
}

export default ListTask