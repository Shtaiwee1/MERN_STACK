import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../components/TaskList';


const Main = () => {

    const [tasks, setTasks] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks')
            .then(res => {
                setTasks(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = taskId => {
        setTasks(tasks.filter(task => task._id !== taskId));
    }

    const updateTask = (id, stat) => {
        axios.put('http://localhost:8000/api/tasks/' + id, { status: stat })
            .then(res => {
                const objIndex = tasks.findIndex((obj => obj._id === id));
                const updatedTasks = [...tasks.slice(0, objIndex), { ...tasks[objIndex], "status": stat }, ...tasks.slice(objIndex + 1)]
                setTasks(updatedTasks);
            })
            .catch(err => console.error(err));
    }
    let toDo = [];
    let inProgress = [];
    let doneTask = [];
    tasks.map(task => {
        if (task.status === "To Do") {
            toDo.push(task);
        } else if (task.status === "In Progress") {
            inProgress.push(task);
        } else {
            doneTask.push(task);
        }
        return null;
    })
    return (
        <div>
            <h1>Project Manager</h1>
            <div style={{ width: "100%", margin: "0 auto", display: "flex" }}>
                <div style={{ margin: "0 auto", width: "25%" }}>  <List tasks={toDo} updateTask={updateTask} removeFromDom={removeFromDom} /></div>
                <div style={{ margin: "0 auto", width: "25%" }} > <List tasks={inProgress} updateTask={updateTask} removeFromDom={removeFromDom} /></div>
                <div style={{ margin: "0 auto", width: "25%" }} > <List tasks={doneTask} updateTask={updateTask} removeFromDom={removeFromDom} /></div>
            </div >
        </div >
    )
}

export default Main