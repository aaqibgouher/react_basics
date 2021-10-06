import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [task, setTask] = useState('');
    const [remainder, setRemainder] = useState(false);

    const onAdd = (e) => {
        e.preventDefault();

        if(!task) {
            alert('please add task ..');
        }

        addTask({ task, remainder })

        setTask('');
        setRemainder(false);
    }

    return (
        <form className="mt-5">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="enter task" value={task} onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" style={{ display: "inline-block" }} value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)}/>
                    <h6 style={{ display: "inline-block" }}>Set Remainder</h6>
                </label>
            </div>
            <button onSubmit={onAdd} type="submit" className="btn btn-outline-dark btn-block">Submit</button>
        </form>
    )
}
                             
export default AddTask