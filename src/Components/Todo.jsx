import {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';
export default function Todo(){
    const [todos,setTodos]=useState([])
    const count=todos.filter((todo)=>todo.done).length
    const total=todos.length
    return(
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer count={count} total={total}/> 
        </div>
        )
        
    }

/*
App
    Header
    Todo(we move todos state here from Form and TodoList as it is the parent of both of them)//this is known as lifting state up
        Form
            state required
            1.Todo single item
            2.Todos all todo items
        TodoList
            state required
            1.Todos all todo items

*/