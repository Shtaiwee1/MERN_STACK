import React ,{useState} from 'react';
import './App.css';

function App() {
  const[newTodo , setNewTodo]= useState("");
  const [todos, setTodos] = useState([]);


  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();

    if(newTodo.length ===0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos,todoItem]);
    setNewTodo("");
    
  };

  const handleTodoDelete = (dellIdx)=>{
    const filteredTodos = todos.filter((todo,i)=>{
      return i !== dellIdx;
    });
    setTodos(filteredTodos);

  }

  const handleToggleComplete = (idx) =>{
    const updatedTodos = todos.map((todo , i)=>{
    if(idx ===i){
      todo.complete =! todo.complete;

      //to avoid mutating the todo directly, do this:
      //const updatedTodos = {...todo, complete: !todo.complete};
      //return updatedtodo;
    }

    return todo;
  });
  setTodos(updatedTodos);
  }

  

  return (
    <div style={{textAlign:"center"}}  >
      <form onSubmit = {(event) =>{ handleNewTodoSubmit(event);}}  >
        
        
      <div className="container my-5">
      <div className="row">
        <div className="col-6 offset-3">
        <input className="form-control" type="text" placeholder="Add item" onChange={(event) =>{setNewTodo(event.target.value)}} type="text" value={newTodo}/>
        </div>
        </div>
        </div>

        <div>
          <button className='btn btn-primary' >Add</button>
        </div>
      </form>  
      {
      todos.map((todo,i)=>{
        const todoClasses=["bold","italic"];
        if(todo.complete){
          todoClasses.push("line-through")
        }
        return (
        <div key={i}>
          <input onChange={(event) =>{handleToggleComplete(i);}} checked={todo.complete} type="checkbox"/>
          <span className={todoClasses.join(" ")}> {todo.text} </span>
          <button className='btn btn-danger'  onClick = {(event)=>{handleTodoDelete(i);}} style={{marginLeft:"10px"}}   >Delete</button>
        </div>
      );
      })}
    </div>
  );
}

export default App;
