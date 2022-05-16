import React, { useState } from 'react'
import TaskForm from './TaskForm'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

const NewTask = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createTask = task => {
        axios.post('http://localhost:8000/api/tasks', task)
            .then(res => {
                console.log("Response", res);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Link to="/"><button>All Tasks</button></Link>
            <p>Add new Task</p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <TaskForm onSubmitProp={createTask} initialTitle="" initialDate="" />
        </div>
    )
}

export default NewTask