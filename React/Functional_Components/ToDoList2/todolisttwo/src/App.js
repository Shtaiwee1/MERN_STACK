import React ,{useState} from 'react';
import './App.css';
import Todo from './components/Todo';

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
        
        
        
        <input onChange={(event) =>{setNewTodo(event.target.value)}} type="text" value={newTodo}/>

        <div>
          <button>Add</button>
        </div>
      </form>  
      {
      todos.map((todo,i)=>{
        
        return (
        <Todo key={i} todo={todo} handleToggleComplete={handleToggleComplete} i={i} handleTodoDelete={handleTodoDelete} />
      );
      })}
    </div>
  );
}

export default App;
