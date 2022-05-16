import React, { useState } from 'react'
import { TextField } from "@mui/material"



const TaskForm = (props) => {
    const { initialTitle, initialDate, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [date, setDate] = useState(initialDate);
    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({ title, date });
        setTitle("");
        setDate("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Task Title" variant="outlined" onChange={e => setTitle(e.target.value)} value={title} /> <br />
                <input type="date" onChange={e => setDate(e.target.value)} value={date}></input><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TaskForm