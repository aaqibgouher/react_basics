import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [task, setTask] = useState('');
    const [remainder, setRemainder] = useState(false);
    const [isError, setError] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        if(!task){
            setError(true);
            alert("Task is required ..");
            return;
        }

        onAdd({ task, remainder });

        setTask('')
        setRemainder(false)
        setError(false)
    }

    return (
        <form className="mt-5" onSubmit={onSubmitForm}>
            <div className="form-group" style={{ border: isError ? "4px solid red" : "" }}>
                <input type="text" className="form-control" placeholder="enter task" value={task} onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" checked={remainder} type="checkbox" style={{ display: "inline-block" }} value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)}/>
                    <h6 style={{ display: "inline-block" }}>Set Remainder</h6>
                </label>
            </div>
            <input className="btn btn-outline-dark btn-block" type="submit" value="Save"/>
        </form>
    )
}
                             
export default AddTask