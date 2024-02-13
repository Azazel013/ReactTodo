import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList({todos,setTodos}){
    const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return(
       <div className={styles.list}>
       {/*console.log(todos)/* first we will get 2 empty array but if we add one item and other other will override it */}
       
        {sortedTodos.map((item)=><TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>)}
       
       </div>
    )
}