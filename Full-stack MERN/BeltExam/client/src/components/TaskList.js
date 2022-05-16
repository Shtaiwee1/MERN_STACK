import React from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";


const TaskList = (props) => {
    const deleteTask = id => {
        axios.delete('http://localhost:8000/api/tasks/' + id)
            .then(res => {
                props.removeFromDom(id);
            })
    }
    return (
        <div>
            {props.tasks.map((task, index) =>
                <p key={index}><Link to={"/tasks/" + task._id}>{task.title}</Link> <br />
                    <Button variant="outlined" onClick={e => task.status === "To Do" ?
                        props.updateTask(task._id, "In Progress") : task.status === "In Progress" ?
                            props.updateTask(task._id, "Done") : deleteTask(task._id)}>{task.status === "To Do" ?
                                "Move to Progress" : task.status === "In Progress" ?
                                    "Move to Done" : "Delete"}</Button>
                </p>)
            }
        </div >
    )
}

export default TaskList