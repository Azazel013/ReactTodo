import {useState} from 'react';
import styles from './Form.module.css'
export default function Form({todos,setTodos}) {
    // const [todo,setTodo]=useState("")
    const [todo,setTodo]=useState({name:"",done:false})

    function handleSubmit(e){
        e.preventDefault()
        // setTodos(todo);//this wont work since because setTodos is setting array and the todo we are using is string
        // setTodos([todo])//setting array but we wont get first empty array because of asynchronous first it will exicute teh console code than setTodos
        // console.log(todos)//so console log inside the code
        setTodos([...todos,todo])//using spread operator to retain previous items
        setTodo({name:"",done:false})//empty after submition
    }
  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.container}>
            <input 
            className={styles.input} 
            type="text" 
            onChange={(e)=>setTodo({name:e.target.value,done:false})} 
            value={todo.name}
            placeholder='Enter your todo here...'
            />
            <button className={styles.btn} type="submit">Submit</button>
        </div>
    </form>
  )
}