import { FaTimes } from 'react-icons/fa';

const Task = ({ id, task, onDelete, onToggle }) => {

    return (
        <div className="container">
            <div className="row p-2 mt-2" style={{ backgroundColor: "rgb(224, 224, 209)", borderLeft: task.status ? "5px solid green" : "" }} onDoubleClick={() => onToggle(task.id)}>
                <div className="col-sm-10">
                    <h5>{task.desc} </h5>
                </div>
                <div className="col-sm-2">
                    <FaTimes onClick={() => onDelete(task.id)} style={{ color: "red", cursor: "pointer" }}/>
                </div>
            </div>
        </div>
    )
}

export default Task